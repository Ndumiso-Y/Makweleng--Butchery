import { useState } from 'react'

export default function LazyImage({ src, alt, className, loading = "lazy", ...props }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative">
      {!imageLoaded && !imageError && (
        <div className={`${className} bg-grey-light animate-pulse flex items-center justify-center`}>
          <div className="text-grey-medium">Loading...</div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading={loading}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        {...props}
      />
      {imageError && (
        <div className={`${className} bg-grey-light flex items-center justify-center text-grey-medium`}>
          Failed to load image
        </div>
      )}
    </div>
  )
}