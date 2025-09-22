// Utility for responsive image handling
export const getOptimizedImageSrc = (imageSrc, width = null) => {
  if (!imageSrc) return '';
  // For now, just return the original source to avoid breaking the app
  return imageSrc;
};

// Generate srcSet for responsive images
export const generateSrcSet = (imageSrc, sizes = [400, 800, 1200, 1600]) => {
  if (!imageSrc) return '';
  // For now, just return empty string to avoid breaking the app
  return '';
};

// Lazy loading utility
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.srcset = img.dataset.srcset;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Video optimization utility
export const getOptimizedVideoSrc = (videoSrc) => {
  if (!videoSrc) return { webm: '', mp4: '', poster: '' };

  // For now, just return the original source to avoid breaking the app
  return {
    webm: videoSrc,
    mp4: videoSrc,
    poster: ''
  };
};