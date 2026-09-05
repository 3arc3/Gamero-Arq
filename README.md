# Gamero Arquitectos - Website Redesign

A modern, minimalist website redesign for Gamero Arquitectos, an architecture and construction studio based in Sevilla, Spain. This project features a clean design with a green-blue-white color palette, interactive elements, and comprehensive company information.

## 🌟 Features

### Design & Layout
- **Modern Minimalist Design**: Clean, professional aesthetic with focus on content
- **Green-Blue-White Color Palette**: Harmonious color scheme reflecting professionalism and trust
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle animations and transitions for enhanced user experience
- **Typography**: Professional typography using Montserrat and Playfair Display fonts

### Navigation & Structure
- **Sticky Header**: Fixed navigation header with scroll effects
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Dropdown Navigation**: Multi-level dropdown menus for services section
- **Smooth Scrolling**: Smooth scroll navigation between sections
- **Active Link Highlighting**: Dynamic highlighting of current section

### Interactive Elements
- **Contact Banner**: Floating interactive banner with multiple contact options
- **WhatsApp Integration**: Direct WhatsApp messaging functionality
- **Call Scheduling**: Modal form for scheduling phone calls
- **Direct Call**: One-click phone calling functionality
- **Contact Forms**: Comprehensive contact and scheduling forms with validation
- **Back to Top Button**: Convenient navigation helper

### Content Sections
- **Hero Section**: Eye-catching introduction with statistics and CTAs
- **About Section**: Company overview with features and image gallery
- **Services Section**: Detailed service offerings with 6 main services
- **Projects Gallery**: Showcase of completed projects with hover effects
- **Values Section**: Company values and principles
- **Company Information**: Comprehensive company details, timeline, and certifications
- **Contact Section**: Multiple contact methods and information
- **Footer**: Complete footer with links, social media, and legal information

### Technical Features
- **Google Maps Integration**: Interactive map showing location in Sevilla
- **Form Validation**: Client-side validation with user-friendly error messages
- **Lazy Loading**: Optimized image loading for better performance
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Efficient code with minimal dependencies

## 📁 Project Structure

```
gamero-arq-redesign/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with CSS variables
├── main.js            # Interactive JavaScript functionality
├── README.md          # Project documentation
└── images/            # Image assets (to be added)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor or IDE
- Local web server (optional, for testing)

### Installation

1. **Clone or download the project**
   ```bash
   cd gamero-arq-redesign
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local web server for better development experience

### Using a Local Web Server

#### Option 1: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js (with http-server)
```bash
npx http-server -p 8000
```

#### Option 3: PHP
```bash
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables in `styles.css`. Modify the `:root` section to customize:

```css
:root {
    /* Primary Colors - Green-Blue Tones */
    --color-primary-dark: #1a5f4a;
    --color-primary: #2d8a6e;
    --color-primary-light: #3db380;
    
    /* Secondary Colors - Blue Tones */
    --color-secondary-dark: #1e3a5f;
    --color-secondary: #2c5282;
    --color-secondary-light: #4299e1;
    
    /* ... and more color variables */
}
```

### Contact Information
Update contact details in `index.html`:

```html
<!-- Phone number -->
<a href="tel:659134860">659 134 860</a>

<!-- Email -->
<a href="mailto:info@gameroarquitectos.es">info@gameroarquitectos.es</a>

<!-- WhatsApp -->
<a href="https://api.whatsapp.com/send?phone=34659134860">
```

### Google Maps
Update the Google Maps iframe in the company information section:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!YOUR_MAP_EMBED_CODE"
    width="100%" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### Images
Replace placeholder images with your own:

1. Add your images to an `images/` directory
2. Update image `src` attributes in `index.html`
3. For optimal performance, use WebP format and appropriate sizes

## 📱 Responsive Breakpoints

The website uses the following breakpoints:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 JavaScript Functionality

### Main Features
- **Navigation System**: Mobile menu toggle, dropdown handling, active link highlighting
- **Scroll Effects**: Header scroll effects, back-to-top button visibility
- **Contact Banner**: Toggle functionality, click-outside handling
- **Modal System**: Schedule call modal with open/close functionality
- **Form Handling**: Form validation, submission handling, error display
- **Animations**: Scroll-triggered animations with intersection observer
- **Smooth Scrolling**: Enhanced anchor link navigation
- **Lazy Loading**: Optimized image loading
- **Accessibility**: Keyboard navigation, ARIA labels, focus management

### Form Validation
Forms include comprehensive validation:
- Required field checking
- Email format validation
- Phone number validation
- Minimum length requirements
- Real-time validation feedback
- User-friendly error messages

## 🎯 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile Safari**: iOS 12+
- **Chrome Mobile**: Android 8+

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of HTML5 semantic elements
- **ARIA Labels**: Comprehensive ARIA labeling for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators and logical tab order
- **Screen Reader Support**: Optimized for screen readers
- **Color Contrast**: WCAG AA compliant color contrast ratios
- **Skip Links**: Skip to main content link for keyboard users
- **Reduced Motion**: Respects prefers-reduced-motion preference

## 📊 Performance Optimization

- **Lazy Loading**: Images load only when needed
- **CSS Optimization**: Efficient CSS with minimal redundancy
- **JavaScript Optimization**: Throttled and debounced event handlers
- **Font Loading**: Optimized font loading with display swap
- **Image Optimization**: Recommendations for WebP format and proper sizing
- **Minimal Dependencies**: No external JavaScript frameworks

## 🔒 Security Considerations

- **Form Validation**: Client-side validation (backend validation recommended)
- **External Links**: All external links use `rel="noopener noreferrer"`
- **HTTPS**: Recommended for production deployment
- **Input Sanitization**: Basic input handling (backend sanitization recommended)

## 📝 Content Management

### Updating Text Content
Most text content can be updated directly in `index.html`:

```html
<section id="sobre-nosotros">
    <h2 class="section-title">Your Title Here</h2>
    <p>Your description here...</p>
</section>
```

### Adding New Services
Add new services in the services section:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="service-content">
        <h3 class="service-title">Service Name</h3>
        <p class="service-description">Description...</p>
        <ul class="service-features">
            <li><i class="fas fa-check"></i> Feature 1</li>
        </ul>
    </div>
</div>
```

### Adding New Projects
Add projects to the gallery:

```html
<div class="project-item">
    <div class="project-image">
        <img src="your-image.jpg" alt="Project description">
        <div class="project-overlay">
            <div class="project-content">
                <h4 class="project-title">Project Name</h4>
                <p class="project-category">Category</p>
            </div>
        </div>
    </div>
</div>
```

## 🚢 Deployment

### Static Hosting Options

#### Netlify
1. Connect your GitHub repository
2. Netlify will automatically deploy
3. Custom domain configuration available

#### Vercel
1. Import project from Git
2. Vercel handles deployment automatically
3. Preview deployments available

#### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Deploy from main branch
3. Access at `username.github.io/repository-name`

#### Traditional Hosting
1. Upload files to web server
2. Ensure `index.html` is the default document
3. Configure proper MIME types

### Environment Variables
No environment variables required for basic functionality. For advanced features like analytics, you may need:

```javascript
// In main.js
const ANALYTICS_ID = 'your-analytics-id';
const MAPS_API_KEY = 'your-google-maps-api-key';
```

## 🐛 Troubleshooting

### Images Not Loading
- Check image file paths
- Ensure images exist in the specified locations
- Verify file permissions

### Forms Not Submitting
- Ensure form validation is passing
- Check browser console for errors
- Verify backend endpoint is configured

### Mobile Menu Not Working
- Check JavaScript is loaded
- Verify no JavaScript errors in console
- Test on actual mobile device

### Google Maps Not Displaying
- Verify API key is valid (if using custom implementation)
- Check iframe src is correct
- Ensure internet connection is available

## 📈 Future Enhancements

Potential improvements for future versions:

- **Backend Integration**: Connect forms to backend services
- **CMS Integration**: Content management system for easy updates
- **Blog Section**: Add blog/news functionality
- **Project Gallery**: Advanced filtering and search
- **Multi-language Support**: Spanish and English versions
- **Online Booking**: Enhanced appointment scheduling
- **Client Portal**: Secure client area for project updates
- **Virtual Tours**: 360° project views
- **Analytics Integration**: Google Analytics or similar
- **SEO Optimization**: Advanced SEO features and structured data

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for Gamero Arquitectos. All rights reserved.

## 👥 Contact

For questions or support regarding this website:

- **Phone**: 659 134 860
- **Email**: info@gameroarquitectos.es
- **Website**: https://gameroarquitectos.es
- **Address**: Sevilla, España

## 🙏 Acknowledgments

- **Design**: Modern minimalist design principles
- **Icons**: Font Awesome icon library
- **Fonts**: Google Fonts (Montserrat, Playfair Display)
- **Images**: Unsplash for placeholder images
- **Inspiration**: Modern architecture and design trends

## 📚 Resources

- [Font Awesome](https://fontawesome.com/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Web fonts
- [Unsplash](https://unsplash.com/) - Stock images
- [MDN Web Docs](https://developer.mozilla.org/) - Web development documentation
- [W3C Web Accessibility Initiative](https://www.w3.org/WAI/) - Accessibility guidelines

---

**Note**: This is a complete redesign of the Gamero Arquitectos website with enhanced functionality, modern design, and improved user experience. All company information has been preserved and presented in a more organized and accessible manner.