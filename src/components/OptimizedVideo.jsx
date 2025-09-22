import { useState, useRef, useEffect } from 'react'
import { getOptimizedVideoSrc } from '../utils/imageOptimization'

export default function OptimizedVideo({
  src,
  className = '',
  poster = null,
  fallback = null,
  autoplay = false,
  lazy = true,
  priority = false,
  ...props
}) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isInView, setIsInView] = useState(!lazy || priority)
  const videoRef = useRef(null)

  // Intersection Observer for lazy loading videos
  useEffect(() => {
    if (!lazy || priority || isInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [lazy, priority, isInView])

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  const handleLoadStart = () => {
    setIsLoading(true)
  }

  const handleCanPlay = () => {
    setIsLoading(false)
  }

  const optimizedSources = getOptimizedVideoSrc(src)

  if (hasError) {
    if (fallback) {
      return fallback
    }
    return (
      <div className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-center">
          <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
          </svg>
          <p className="text-sm font-medium">Video unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={videoRef} className="relative overflow-hidden">
      {/* Loading placeholder */}
      {isLoading && (
        <div className={`absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center ${className}`}>
          <div className="text-amber-600 text-center">
            <svg className="w-10 h-10 mx-auto mb-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16a3 3 0 01-3-3V7a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3" />
            </svg>
            <span className="text-sm font-medium">Loading video...</span>
          </div>
        </div>
      )}

      {/* Render video only when in view or priority */}
      {(isInView || priority || !lazy) && (
        <video
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          onError={handleError}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          poster={poster || optimizedSources.poster}
          preload={priority ? 'auto' : lazy ? 'none' : 'metadata'}
          autoPlay={autoplay}
          playsInline
          {...props}
        >
          <source src={optimizedSources.webm} type="video/webm" />
          <source src={optimizedSources.mp4} type="video/mp4" />
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}