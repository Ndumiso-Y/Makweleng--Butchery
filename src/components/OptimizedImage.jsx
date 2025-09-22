import { useState, useRef, useEffect } from 'react'
import { getOptimizedImageSrc, generateSrcSet } from '../utils/imageOptimization'

export default function OptimizedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  fallback = null,
  placeholder = true,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isInView, setIsInView] = useState(priority || loading === 'eager')
  const imgRef = useRef(null)

  // Intersection Observer for better lazy loading
  useEffect(() => {
    if (priority || loading === 'eager' || isInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before coming into view
        threshold: 0.1
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority, loading, isInView])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  if (hasError && fallback) {
    return fallback
  }

  if (hasError) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
          </svg>
          <span className="text-sm">Image unavailable</span>
        </div>
      </div>
    )
  }

  return (
    <div ref={imgRef} className="relative overflow-hidden">
      {/* Enhanced placeholder with brand colors */}
      {placeholder && isLoading && (
        <div className={`absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 animate-pulse flex items-center justify-center ${className}`}>
          <div className="text-amber-600 text-center">
            <svg className="w-8 h-8 mx-auto mb-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" strokeDasharray="31.416" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-medium">Loading...</span>
          </div>
        </div>
      )}

      {/* Render image only when in view or priority */}
      {(isInView || priority || loading === 'eager') && (
        <img
          src={getOptimizedImageSrc(src)}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-all duration-500 ease-out`}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          {...props}
        />
      )}
    </div>
  )
}