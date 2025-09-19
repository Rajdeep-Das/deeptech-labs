// Analytics utility functions for Umami and GA4 tracking
// Usage: import { trackEvent } from '@/lib/analytics'

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, any>) => void;
    };
    gtag?: (
      command: 'config' | 'set' | 'event',
      targetId: string | Record<string, any>,
      config?: Record<string, any>
    ) => void;
  }
}

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  // Track with Umami (primary)
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, eventData);
  }

  // Track with GA4 (backup) if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName.toLowerCase().replace(/\s+/g, '_'), {
      event_category: 'B2B Consulting',
      event_label: eventData?.source || 'unknown',
      value: eventData?.value || 0,
      ...eventData
    });
  }
};

// Business-specific tracking functions
export const trackAuditBooking = (source?: string) => {
  trackEvent('Audit Booking', {
    source: source || 'unknown',
    value: 300, // $300 audit price
    currency: 'USD'
  });
};

export const trackServiceView = (service: 'audit' | 'integration' | 'saas-backend') => {
  trackEvent('Service View', {
    service_type: service,
    page: window.location.pathname
  });
};

export const trackCaseStudyView = (caseStudy: string) => {
  trackEvent('Case Study View', {
    case_study: caseStudy,
    page: window.location.pathname
  });
};

export const trackContactInteraction = (type: 'email' | 'calendar' | 'form') => {
  trackEvent('Contact Interaction', {
    interaction_type: type,
    page: window.location.pathname
  });
};

// Geographic and business intelligence events
export const trackBusinessInquiry = (inquiryType: 'audit' | 'integration' | 'saas' | 'general') => {
  trackEvent('Business Inquiry', {
    inquiry_type: inquiryType,
    timestamp: new Date().toISOString(),
    page: window.location.pathname
  });
};

export const trackPageView = (pageName: string) => {
  trackEvent('Page View', {
    page_name: pageName,
    timestamp: new Date().toISOString()
  });
};