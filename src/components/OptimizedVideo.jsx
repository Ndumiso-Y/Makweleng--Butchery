import { useState } from 'react'

export default function OptimizedVideo({
  src,
  className = '',
  poster = null,
  fallback = null,
  ...props
}) {
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
  }

  if (hasError) {
    if (fallback) {
      return fallback
    }
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-center">
          <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <p>Video unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <video
      className={className}
      onError={handleError}
      poster={poster}
      {...props}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}