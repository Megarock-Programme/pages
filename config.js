// Shared configuration for legal documents
const CONFIG = {
    lastUpdated: 'January 2026',
    contactEmail: 'zeinrasyid18@gmail.com'
};

// Update elements when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Update last updated date
    const lastUpdatedElement = document.querySelector('.last-updated strong');
    if (lastUpdatedElement) {
        lastUpdatedElement.nextSibling.textContent = ' ' + CONFIG.lastUpdated;
    }
    
    // Update contact email
    const contactElements = document.querySelectorAll('[data-contact-email]');
    contactElements.forEach(element => {
        element.textContent = element.textContent.replace(/zeinrasyid.*@.*\.com/, CONFIG.contactEmail);
    });
});