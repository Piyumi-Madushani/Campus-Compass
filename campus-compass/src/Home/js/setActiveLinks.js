export const setActiveLinks = (headerSelector, footerSelector) => {
    const currentPath = window.location.pathname;
  
    const setLinksActive = (selector) => {
      const links = document.querySelectorAll(selector);
      links.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
          link.parentElement.classList.add("active");
        } else {
          link.parentElement.classList.remove("active");
        }
      });
    };
  
    setLinksActive(headerSelector);
    setLinksActive(footerSelector);
  };
  
console.log("setActiveLinks loaded");