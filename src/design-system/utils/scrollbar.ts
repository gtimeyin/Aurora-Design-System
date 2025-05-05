/**
 * Utility for custom scrollbar behavior
 * Adds 'scrolling' class to elements while they're being scrolled
 * This allows for dynamic opacity changes during scrolling
 */

export const initScrollbarBehavior = () => {
  // Find all elements with the custom-scrollbar class
  const scrollableElements = document.querySelectorAll('.custom-scrollbar');
  
  // Timeout variable to handle scroll end detection
  let scrollingTimeout: number;
  
  // Add the scroll event listener to each scrollable element
  scrollableElements.forEach(element => {
    element.addEventListener('scroll', () => {
      // Add the scrolling class when scrolling starts
      element.classList.add('scrolling');
      
      // Clear any existing timeout
      if (scrollingTimeout) {
        window.clearTimeout(scrollingTimeout);
      }
      
      // Set a timeout to remove the class when scrolling stops
      scrollingTimeout = window.setTimeout(() => {
        element.classList.remove('scrolling');
      }, 1000); // Keep the scrollbar visible for 1 second after scrolling stops
    });
    
    // Also handle hover state for better UX
    element.addEventListener('mouseenter', () => {
      element.classList.add('scrolling');
    });
    
    element.addEventListener('mouseleave', () => {
      // Only remove if not actively scrolling
      if (!element.classList.contains('scrolling-active')) {
        window.setTimeout(() => {
          element.classList.remove('scrolling');
        }, 500);
      }
    });
  });
};

// Function to manually initialize for SPA components
export const initScrollbarForElement = (element: HTMLElement) => {
  if (!element) return;
  
  let scrollingTimeout: number;
  
  element.addEventListener('scroll', () => {
    element.classList.add('scrolling');
    
    if (scrollingTimeout) {
      window.clearTimeout(scrollingTimeout);
    }
    
    scrollingTimeout = window.setTimeout(() => {
      element.classList.remove('scrolling');
    }, 1000);
  });
  
  element.addEventListener('mouseenter', () => {
    element.classList.add('scrolling');
  });
  
  element.addEventListener('mouseleave', () => {
    window.setTimeout(() => {
      element.classList.remove('scrolling');
    }, 500);
  });
}; 