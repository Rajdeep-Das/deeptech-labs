// Test file to verify Umami tracking is working
// Run this in browser console to test events

export const testUmamiTracking = () => {
  console.log('Testing Umami Analytics...');

  // Check if Umami is loaded
  if (typeof window !== 'undefined' && window.umami) {
    console.log('✅ Umami is loaded successfully');

    // Test a basic event
    try {
      window.umami.track('Test Event', {
        test: 'analytics_verification',
        timestamp: new Date().toISOString()
      });
      console.log('✅ Test event sent successfully');
      return true;
    } catch (error) {
      console.error('❌ Error sending test event:', error);
      return false;
    }
  } else {
    console.error('❌ Umami not loaded');
    return false;
  }
};

// Test in browser console:
// testUmamiTracking()