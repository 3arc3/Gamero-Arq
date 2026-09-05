/**
 * GAMERO ARQUITECTOS - MAIN.JS
 * Interactive Features and Animations
 * Modern, Minimalist Design
 */

// ==========================================
// DOM ELEMENT REFERENCES
// ==========================================
const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const contactBanner = document.getElementById('contactBanner');
const bannerToggle = document.getElementById('bannerToggle');
const bannerContent = document.getElementById('bannerContent');
const bannerClose = document.getElementById('bannerClose');
const scheduleCall = document.getElementById('scheduleCall');
const scheduleModal = document.getElementById('scheduleModal');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const scheduleForm = document.getElementById('scheduleForm');
const backToTop = document.getElementById('backToTop');

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeScrollEffects();
    initializeContactBanner();
    initializeModal();
    initializeForms();
    initializeAnimations();
    initializeSmoothScroll();
    initializeLazyLoading();
    initializeIntersectionObserver();
    console.log('Gamero Arquitectos website initialized successfully');
});

// ==========================================
// NAVIGATION FUNCTIONALITY
// ==========================================
function initializeNavigation() {
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });

    // Active link highlighting
    updateActiveNavLink();
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

    // Dropdown keyboard accessibility
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('keydown', handleDropdownKeyboard);
    });
}

function toggleMobileMenu() {
    if (!navToggle || !navMenu) return;
    
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    if (!navToggle || !navMenu) return;
    
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function handleDropdownKeyboard(e) {
    const dropdown = e.target.closest('.dropdown');
    if (!dropdown) return;

    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.style.opacity = dropdownMenu.style.opacity === '1' ? '0' : '1';
            dropdownMenu.style.visibility = dropdownMenu.style.visibility === 'visible' ? 'hidden' : 'visible';
        }
    }
}

// ==========================================
// SCROLL EFFECTS
// ==========================================
function initializeScrollEffects() {
    // Header scroll effect
    window.addEventListener('scroll', throttle(handleHeaderScroll, 50));

    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
        window.addEventListener('scroll', throttle(handleBackToTopVisibility, 100));
    }
}

function handleHeaderScroll() {
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function handleBackToTopVisibility() {
    if (!backToTop) return;
    
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==========================================
// CONTACT BANNER FUNCTIONALITY
// ==========================================
function initializeContactBanner() {
    if (!bannerToggle || !bannerContent) return;

    bannerToggle.addEventListener('click', () => {
        bannerContent.classList.toggle('active');
        const isExpanded = bannerContent.classList.contains('active');
        bannerToggle.setAttribute('aria-expanded', isExpanded);
    });

    if (bannerClose) {
        bannerClose.addEventListener('click', () => {
            bannerContent.classList.remove('active');
            bannerToggle.setAttribute('aria-expanded', 'false');
        });
    }

    // Close banner when clicking outside
    document.addEventListener('click', (e) => {
        if (contactBanner && !contactBanner.contains(e.target)) {
            bannerContent.classList.remove('active');
            if (bannerToggle) {
                bannerToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Schedule call button
    if (scheduleCall) {
        scheduleCall.addEventListener('click', openScheduleModal);
    }
}

// ==========================================
// MODAL FUNCTIONALITY
// ==========================================
function initializeModal() {
    if (!scheduleModal || !modalClose) return;

    modalClose.addEventListener('click', closeScheduleModal);

    // Close modal when clicking outside
    scheduleModal.addEventListener('click', (e) => {
        if (e.target === scheduleModal) {
            closeScheduleModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && scheduleModal.classList.contains('active')) {
            closeScheduleModal();
        }
    });
}

function openScheduleModal() {
    if (!scheduleModal) return;
    
    scheduleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus on first input
    const firstInput = scheduleModal.querySelector('input');
    if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
    }
}

function closeScheduleModal() {
    if (!scheduleModal) return;
    
    scheduleModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// FORM FUNCTIONALITY
// ==========================================
function initializeForms() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }

    if (scheduleForm) {
        scheduleForm.addEventListener('submit', handleScheduleFormSubmit);
        
        // Set minimum date to today
        const dateInput = document.getElementById('schedule-date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }
    }

    // Form validation enhancements
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        enhanceFormValidation(form);
    });
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Validate form
    if (!validateContactForm(data)) {
        return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    setTimeout(() => {
        submitButton.innerHTML = '<i class="fas fa-check"></i> ¡Mensaje Enviado!';
        submitButton.style.backgroundColor = '#38b2ac';
        
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
            submitButton.style.backgroundColor = '';
            contactForm.reset();
        }, 3000);
    }, 2000);
}

function handleScheduleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(scheduleForm);
    const data = Object.fromEntries(formData.entries());
    
    // Validate form
    if (!validateScheduleForm(data)) {
        return;
    }
    
    // Simulate form submission
    const submitButton = scheduleForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
    
    setTimeout(() => {
        submitButton.innerHTML = '<i class="fas fa-check"></i> ¡Llamada Agendada!';
        submitButton.style.backgroundColor = '#38b2ac';
        
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
            submitButton.style.backgroundColor = '';
            scheduleForm.reset();
            closeScheduleModal();
        }, 2000);
    }, 2000);
}

function validateContactForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Por favor, introduce tu nombre completo');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Por favor, introduce un email válido');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Por favor, introduce un mensaje con al menos 10 caracteres');
    }
    
    if (!data.privacy) {
        errors.push('Debes aceptar la política de privacidad');
    }
    
    if (errors.length > 0) {
        showFormErrors(contactForm, errors);
        return false;
    }
    
    return true;
}

function validateScheduleForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Por favor, introduce tu nombre completo');
    }
    
    if (!data.phone || !isValidPhone(data.phone)) {
        errors.push('Por favor, introduce un teléfono válido');
    }
    
    if (!data.date) {
        errors.push('Por favor, selecciona una fecha');
    }
    
    if (!data.time) {
        errors.push('Por favor, selecciona una hora');
    }
    
    if (errors.length > 0) {
        showFormErrors(scheduleForm, errors);
        return false;
    }
    
    return true;
}

function enhanceFormValidation(form) {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
        
        input.addEventListener('input', () => {
            clearInputError(input);
        });
    });
}

function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;
    
    if (input.hasAttribute('required') && !value) {
        isValid = false;
    }
    
    if (input.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
    }
    
    if (input.type === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
    }
    
    if (!isValid) {
        showInputError(input);
    }
    
    return isValid;
}

function showInputError(input) {
    input.style.borderColor = '#e53e3e';
    
    let errorMessage = input.getAttribute('data-error') || 'Este campo es requerido';
    
    if (input.type === 'email') {
        errorMessage = 'Por favor, introduce un email válido';
    }
    
    if (input.type === 'tel') {
        errorMessage = 'Por favor, introduce un teléfono válido';
    }
    
    let errorElement = input.parentElement.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.style.color = '#e53e3e';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        input.parentElement.appendChild(errorElement);
    }
    
    errorElement.textContent = errorMessage;
}

function clearInputError(input) {
    input.style.borderColor = '';
    
    const errorElement = input.parentElement.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

function showFormErrors(form, errors) {
    // Remove existing error messages
    const existingErrors = form.querySelectorAll('.form-error');
    existingErrors.forEach(error => error.remove());
    
    // Create error container
    let errorContainer = form.querySelector('.error-container');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.className = 'error-container';
        errorContainer.style.backgroundColor = '#fed7d7';
        errorContainer.style.border = '1px solid #fc8181';
        errorContainer.style.borderRadius = '0.5rem';
        errorContainer.style.padding = '1rem';
        errorContainer.style.marginBottom = '1rem';
        form.insertBefore(errorContainer, form.firstChild);
    }
    
    // Add error messages
    errorContainer.innerHTML = '<strong>Por favor, corrige los siguientes errores:</strong><ul>';
    errors.forEach(error => {
        errorContainer.innerHTML += `<li style="color: #c53030; margin-left: 1.25rem;">${error}</li>`;
    });
    errorContainer.innerHTML += '</ul>';
    
    // Scroll to error container
    errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\+\-\(\)]{9,}$/;
    return phoneRegex.test(phone);
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// ==========================================
// ANIMATIONS
// ==========================================
function initializeAnimations() {
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.service-card, .project-item, .value-card, .about-image-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        animationObserver.observe(element);
    });
    
    // Stagger animations for grids
    const grids = document.querySelectorAll('.services-grid, .projects-gallery, .values-grid, .about-image-grid');
    grids.forEach(grid => {
        const items = grid.children;
        Array.from(items).forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === href) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ==========================================
// LAZY LOADING
// ==========================================
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for older browsers
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ==========================================
// INTERSECTION OBSERVER FOR SECTIONS
// ==========================================
function initializeIntersectionObserver() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================
function initializeAccessibility() {
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a[href="#"]');
    interactiveElements.forEach(element => {
        if (!element.getAttribute('aria-label') && !element.textContent.trim()) {
            const icon = element.querySelector('i');
            if (icon) {
                const iconClass = icon.className;
                let label = '';
                
                if (iconClass.includes('facebook')) label = 'Facebook';
                else if (iconClass.includes('instagram')) label = 'Instagram';
                else if (iconClass.includes('whatsapp')) label = 'WhatsApp';
                else if (iconClass.includes('phone')) label = 'Teléfono';
                else if (iconClass.includes('envelope')) label = 'Email';
                else if (iconClass.includes('arrow')) label = 'Ver más';
                
                if (label) {
                    element.setAttribute('aria-label', label);
                }
            }
        }
    });

    // Keyboard navigation for dropdowns
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            });
        }
    });
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
function initializePerformanceOptimizations() {
    // Defer non-critical JavaScript
    const deferredScripts = document.querySelectorAll('script[data-defer]');
    deferredScripts.forEach(script => {
        script.defer = true;
    });

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.getAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition-fast', '0ms');
        document.documentElement.style.setProperty('--transition-base', '0ms');
        document.documentElement.style.setProperty('--transition-slow', '0ms');
    }
}

// ==========================================
// LOCAL STORAGE FOR PREFERENCES
// ==========================================
function initializeUserPreferences() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Save contact form data for convenience
    const contactInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
    contactInputs.forEach(input => {
        const savedValue = localStorage.getItem(`contact_${input.name}`);
        if (savedValue && input.type !== 'checkbox' && input.type !== 'radio') {
            input.value = savedValue;
        }

        input.addEventListener('input', debounce(() => {
            if (input.type !== 'checkbox' && input.type !== 'radio') {
                localStorage.setItem(`contact_${input.name}`, input.value);
            }
        }, 500));
    });
}

// ==========================================
// COOKIE CONSENT (Simple Implementation)
// ==========================================
function initializeCookieConsent() {
    const consentGiven = localStorage.getItem('cookieConsent');
    
    if (!consentGiven) {
        // Create cookie consent banner
        const consentBanner = document.createElement('div');
        consentBanner.id = 'cookieConsent';
        consentBanner.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #1a202c;
            color: white;
            padding: 1rem 2rem;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
        `;
        
        consentBanner.innerHTML = `
            <p style="margin: 0; font-size: 0.875rem;">
                Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra 
                <a href="#politica-cookies" style="color: #4fd1c5;">política de cookies</a>.
            </p>
            <button id="acceptCookies" style="
                background: #38b2ac;
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                cursor: pointer;
                font-weight: 600;
                margin-left: 1rem;
            ">Aceptar</button>
        `;
        
        document.body.appendChild(consentBanner);
        
        const acceptButton = document.getElementById('acceptCookies');
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            consentBanner.remove();
        });
    }
}

// ==========================================
// ANALYTICS TRACKING (Placeholder)
// ==========================================
function initializeAnalytics() {
    // Track page view
    trackEvent('page_view', {
        page: window.location.pathname,
        title: document.title
    });

    // Track outbound links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('outbound_link', {
                url: link.href
            });
        });
    });

    // Track contact form interactions
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            trackEvent('form_submit', {
                form: 'contact'
            });
        });
    }
}

function trackEvent(eventName, data) {
    // Placeholder for analytics tracking
    // In production, this would send data to your analytics service
    console.log(`Analytics Event: ${eventName}`, data);
}

// ==========================================
// SERVICE WORKER REGISTRATION (Progressive Web App)
// ==========================================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(error => {
                    console.log('ServiceWorker registration failed:', error);
                });
        });
    }
}

// ==========================================
// ERROR HANDLING
// ==========================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // In production, send error details to error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // In production, send error details to error tracking service
});

// ==========================================
// INITIALIZE ADDITIONAL FEATURES
// ==========================================
// Initialize accessibility enhancements
initializeAccessibility();

// Initialize performance optimizations
initializePerformanceOptimizations();

// Initialize user preferences
initializeUserPreferences();

// Initialize cookie consent
initializeCookieConsent();

// Initialize analytics
initializeAnalytics();

// Register service worker (uncomment if implementing PWA)
// registerServiceWorker();

// ==========================================
// UTILITY: GET CURRENT DEVICE TYPE
// ==========================================
function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
        return 'mobile';
    } else if (/tablet|ipad/i.test(userAgent)) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

// ==========================================
// UTILITY: CHECK IF ELEMENT IS IN VIEWPORT
// ==========================================
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ==========================================
// UTILITY: FORMAT PHONE NUMBER
// ==========================================
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
    
    if (match) {
        return `${match[1]} ${match[2]} ${match[3]}`;
    }
    
    return phoneNumber;
}

// ==========================================
// UTILITY: COPY TO CLIPBOARD
// ==========================================
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return Promise.resolve();
        } catch (err) {
            document.body.removeChild(textArea);
            return Promise.reject(err);
        }
    }
}

// ==========================================
// EXPORT FUNCTIONS FOR TESTING (if needed)
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeScrollEffects,
        initializeContactBanner,
        initializeModal,
        initializeForms,
        initializeAnimations,
        initializeSmoothScroll,
        initializeLazyLoading,
        initializeIntersectionObserver,
        isValidEmail,
        isValidPhone,
        throttle,
        debounce,
        getDeviceType,
        isElementInViewport,
        formatPhoneNumber,
        copyToClipboard
    };
}