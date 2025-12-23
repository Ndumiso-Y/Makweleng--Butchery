// Google Analytics 4 Event Tracking Utilities

// Initialize global click tracking
export function initializeGlobalTracking() {
  // Track all clicks globally using event delegation
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    const href = target.getAttribute('href') || '';
    const text = target.textContent?.trim() || '';

    // WhatsApp links
    if (href.includes('wa.me') || href.includes('whatsapp')) {
      const source = getSourceFromContext(target);
      if (typeof window.trackEvent === 'function') {
        window.trackEvent('contact_whatsapp_click', {
          contact_type: 'whatsapp',
          source: source,
          button_text: text
        });
      }
    }

    // Phone links
    if (href.startsWith('tel:')) {
      const source = getSourceFromContext(target);
      if (typeof window.trackEvent === 'function') {
        window.trackEvent('contact_phone_click', {
          contact_type: 'phone',
          source: source,
          phone_number: href.replace('tel:', '')
        });
      }
    }

    // Email links
    if (href.startsWith('mailto:')) {
      const source = getSourceFromContext(target);
      if (typeof window.trackEvent === 'function') {
        window.trackEvent('contact_email_click', {
          contact_type: 'email',
          source: source,
          email: href.replace('mailto:', '')
        });
      }
    }

    // Anchor links (like #services on home page)
    if (href.startsWith('#')) {
      const anchorName = href.replace('#', '');
      if (typeof window.trackEvent === 'function') {
        window.trackEvent('anchor_navigation', {
          anchor_target: anchorName,
          source_page: window.location.pathname
        });
      }
    }
  });
}

// Helper to determine the source/context of a click
function getSourceFromContext(element) {
  // Check if in navbar
  if (element.closest('header')) return 'navbar';
  // Check if in footer
  if (element.closest('footer')) return 'footer';
  // Check for specific sections
  const section = element.closest('section');
  if (section) {
    const sectionId = section.id || section.className;
    if (sectionId.includes('hero')) return 'hero';
    if (sectionId.includes('contact')) return 'contact_section';
    if (sectionId.includes('service')) return 'services_section';
  }
  return 'page_content';
}

// Track CTA button clicks
export function trackCTA(ctaName, params = {}) {
  if (typeof window.trackEvent === 'function') {
    window.trackEvent(ctaName, params);
  }
}

// Track form submissions
export function trackFormSubmit(formName, formData = {}) {
  if (typeof window.trackEvent === 'function') {
    window.trackEvent('contact_form_submit', {
      form_name: formName,
      ...formData
    });
  }
}

// Track service card interactions
export function trackServiceInteraction(serviceName, action = 'view') {
  if (typeof window.trackEvent === 'function') {
    window.trackEvent(`service_${action}_${serviceName}`, {
      service_name: serviceName,
      action: action
    });
  }
}
