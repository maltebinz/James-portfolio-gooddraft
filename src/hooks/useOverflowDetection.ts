import { useState, useEffect, useCallback } from 'react';

export const useOverflowDetection = () => {
  const [shouldScroll, setShouldScroll] = useState(false);
  
  const checkOverflow = useCallback(() => {
    // Get the main content container or body
    const body = document.body;
    const html = document.documentElement;
    const windowHeight = window.innerHeight;
    
    // Calculate the total document height
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    
    // Add a small buffer (20px) to prevent flickering at edge cases
    const buffer = 20;
    const hasOverflow = documentHeight > (windowHeight + buffer);
    
    setShouldScroll(hasOverflow);
  }, []);
  
  useEffect(() => {
    // Initial check
    checkOverflow();
    
    // Add resize listener
    window.addEventListener('resize', checkOverflow);
    
    // Also check on orientation change for mobile
    window.addEventListener('orientationchange', () => {
      // Delay to allow for orientation change to complete
      setTimeout(checkOverflow, 100);
    });
    
    // Clean up listeners
    return () => {
      window.removeEventListener('resize', checkOverflow);
      window.removeEventListener('orientationchange', checkOverflow);
    };
  }, [checkOverflow]);
  
  // Also provide a manual trigger for when content changes
  const triggerCheck = useCallback(() => {
    setTimeout(checkOverflow, 10);
  }, [checkOverflow]);
  
  return { shouldScroll, triggerCheck };
};