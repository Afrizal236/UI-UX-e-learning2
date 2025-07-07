# BersamaRamy Learning Platform

## Overview

BersamaRamy is a comprehensive educational platform that has evolved from a general programming course website to a complete learning management system. The platform now includes specialized SNBT (Seleksi Nasional Berdasarkan Tes) preparation called "RuangRamy Belajar SNBT", interactive dashboards for students, teachers, and parents, plus an integrated payment system.

## Project Structure

```
├── index.html          # Registration page with dark theme
├── index2.html         # Login page 
├── index3.html         # Main SNBT learning platform
├── index4.html         # Student academic information system
├── index5.html         # Logout confirmation page
├── index6.html         # Teacher dashboard for content upload
├── index7.html         # Parent monitoring dashboard
├── index8.html         # Shopping cart and payment system
├── index9.html         # Mobile-responsive version
├── payment.html        # Payment packages and checkout
├── style.css           # Original stylesheet
├── style2.css          # Alternative stylesheet
├── style3.css          # SNBT platform dark theme
├── video.js            # Video control functionality
└── Study Materials/    # Educational content (PDFs)
    ├── Literature/     # Indonesian & English literature
    ├── Mathematics/    # Math reasoning materials
    └── General/        # General reasoning materials
```

## Features

### Core Platform Features
- **Multi-User Dashboard System**: Separate interfaces for students, teachers, and parents
- **SNBT Preparation Hub**: Specialized content for Indonesian college entrance exams
- **Interactive Registration & Login**: Multi-step authentication system
- **Payment Integration**: Multiple payment methods and subscription packages
- **Mobile-Responsive Design**: Optimized for all device sizes
- **Content Management**: Teacher tools for uploading materials and assignments

### Educational Content
- **Video Learning Library**: Embedded YouTube tutorials and lessons
- **Document Repository**: PDF materials for Mathematics, Literature, and General Reasoning
- **Professional Mentoring**: Access to qualified instructors
- **Progress Tracking**: Academic monitoring for students and parents

### Page-Specific Features

#### # Student Dashboard (index4.html)
- Assignment tracking with deadline notifications
- Exam schedule and notifications
- Academic calendar with interactive dates
- Grade viewing and progress monitoring

#### # Teacher Dashboard (index6.html)
- Content upload system (assignments, videos, materials)
- Class management and student targeting
- File management with preview capabilities
- Multi-format support (PDF, Video, Documents)

#### # Parent Dashboard (index7.html)
- Child selection and monitoring
- Academic progress tracking
- Communication with teachers
- Performance analytics and reporting

#### # Payment System (index8.html & payment.html)
- Shopping cart functionality
- Multiple payment methods (Bank Transfer, Virtual Account, E-Wallet, QRIS)
- Subscription packages (Basic, Premium, Intensive)
- Premium content access control

## Versions

### Version 1 (index.html)
- Light theme design
- Basic programming course focus
- External CSS styling
- Classic web design approach

### Version 2 (index2.html)
- Dark theme implementation
- Embedded CSS for better performance
- Enhanced visual effects
- Modern color palette

### Version 3 (index3.html - Final)
- SNBT exam preparation focus
- Enhanced video integration
- Advanced user registration
- Complete dark theme experience
- Sign up and logout functionality

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Media Integration**: YouTube API for video embedding
- **Typography**: Google Fonts (Roboto, Segoe UI)
- **Responsive Framework**: Custom responsive design with CSS Media Queries
- **Interactive Elements**: Vanilla JavaScript for dynamic functionality

## Educational Materials Included

### # PDF Study Materials
- **Indonesian Literature**: Comprehensive reading comprehension exercises
- **English Literature**: Reading comprehension and grammar materials  
- **Mathematics Reasoning**: Advanced problem-solving for SNBT preparation
- **General Reasoning**: Logic and analytical thinking exercises

### # Video Content
- Embedded YouTube tutorials covering:
  - SNBT test strategies and tips
  - Subject-specific learning modules
  - Expert guidance from qualified mentors
  - Practice sessions and mock tests

## Installation & Setup

1. **Clone or download** the project files
2. **Open any HTML file** in a web browser to start exploring
3. **For the complete experience**, start with `index.html` (registration) → `index2.html` (login) → `index3.html` (main platform)
4. **Internet connection required** for external resources (fonts, images, videos)

### # Quick Start Guide
```bash
# No build process required - pure HTML/CSS/JS
# Simply open in browser:
open index.html     # Start with registration
# or
open index3.html    # Jump to main platform
# or  
open payment.html   # View payment system
```

## CSS Design System

### # Dark Theme Variables
```css
:root {
    --primary-color: #9d7cff;
    --secondary-color: #8a5cf7;
    --dark-bg: #121212;
    --card-bg: #1e1e1e;
    --text-light: #e0e0e0;
    --text-gray: #aaaaaa;
}
```

### # Responsive Breakpoints
- **Mobile**: < 768px (Hamburger menu, stacked layout)
- **Tablet**: 768px - 1199px (Adaptive grid system)  
- **Desktop**: 1200px+ (Full feature layout)

### # Component Architecture
- **Card-based Design**: Consistent card components across all pages
- **Grid Systems**: CSS Grid for complex layouts, Flexbox for components
- **Interactive States**: Hover effects, transitions, and micro-animations

## Payment System Features

### # Subscription Packages
- **Basic Package**: Rp 99,000/month - PDF access + 2 mentor consultations
- **Premium Package**: Rp 199,000/3 months - Premium videos + 5 consultations + online tests
- **Intensive Package**: Rp 499,000/6 months - Unlimited access + personal analysis

### # Payment Methods
- **Bank Transfer**: BCA, Mandiri, BNI, BRI
- **Virtual Account**: Multiple bank options
- **E-Wallet**: GoPay, OVO, DANA, LinkAja
- **QRIS**: Universal QR payment system

### # Access Control
- **Content Gating**: Premium materials locked until payment
- **Subscription Management**: Track user access levels
- **Payment Verification**: Automated access granting post-payment

## Form Validation & User Input

### # Registration Form Fields
- **Nama Lengkap**: Full name validation
- **Username**: Unique identifier creation
- **Tanggal Lahir**: Date picker for age verification  
- **Jenis Kelamin**: Gender selection (dropdown)
- **Agama**: Religion selection with multiple options
- **Alamat**: Complete address (textarea)
- **Password**: Secure password with confirmation matching

### # Academic Information Forms
- **Subject Selection**: SNBT-specific materials
  - Literasi Bahasa Indonesia
  - Penalaran Umum  
  - Literasi Bahasa Inggris
  - Penalaran Matematika
  - Tes Potensi Skolastik
- **Class Management**: Grade level and section assignment
- **Progress Tracking**: Assignment completion and grade recording

## Browser Compatibility & Performance

### # Supported Browsers
- **Chrome 90+** (Recommended)
- **Firefox 88+**
- **Safari 14+**
- **Edge 90+**
- **Mobile Browsers**: iOS Safari, Chrome Mobile

### # Performance Features
- **Lazy Loading**: Videos and images load on demand
- **Optimized Assets**: Compressed images and efficient CSS
- **Responsive Images**: Multiple sizes for different screen densities
- **Minimal JavaScript**: Vanilla JS for fast loading times

## Educational Content Integration

### # Study Materials Access
- **Direct PDF Links**: Click-to-access educational documents
- **Video Streaming**: Embedded YouTube content with controls
- **Progress Tracking**: Mark completed materials and track learning path
- **Offline Access**: Downloadable PDFs for offline study

### # Mentor Integration
- **Profile Display**: Mentor qualifications and specializations
- **Contact System**: Direct communication channels
- **Consultation Booking**: Schedule sessions with available mentors
- **Feedback System**: Rate and review mentor interactions

## Development & Customization

### # File Organization
- **Core Pages**: Main user-facing HTML files
- **Stylesheets**: Modular CSS for different components
- **JavaScript**: Event handling and interactive functionality
- **Assets**: Images, fonts, and educational materials

### # Customization Options
- **Theme Modification**: Edit CSS variables for color schemes
- **Content Updates**: Replace videos, PDFs, and mentor information
- **Form Customization**: Modify registration and payment forms
- **Responsive Breakpoints**: Adjust mobile/tablet/desktop layouts

### # Adding New Features
1. **New Page Creation**: Follow existing HTML structure patterns
2. **CSS Integration**: Use established design system variables
3. **JavaScript Enhancement**: Extend existing functionality
4. **Content Management**: Add new educational materials

## Deployment & Hosting

### # Static Hosting Requirements
- **Web Server**: Any HTTP server (Apache, Nginx, IIS)
- **SSL Certificate**: Recommended for payment functionality
- **CDN Integration**: For optimal global performance
- **Domain Configuration**: Point to index.html as entry point

### # Recommended Hosting Platforms
- **Vercel**: Automatic deployments with GitHub integration
- **Netlify**: Free tier with form handling
- **GitHub Pages**: Free hosting for public repositories
- **Traditional Web Hosting**: cPanel, shared hosting providers

## Future Development Roadmap

### # Phase 1: Backend Integration
- [ ] User authentication system
- [ ] Database for user progress tracking
- [ ] Payment processing integration
- [ ] Content management system

### # Phase 2: Advanced Features  
- [ ] Real-time messaging between users
- [ ] Video conferencing for mentor sessions
- [ ] Advanced analytics dashboard
- [ ] Mobile app development

### # Phase 3: Platform Expansion
- [ ] Multi-language support
- [ ] API for third-party integrations
- [ ] Advanced assessment tools
- [ ] Gamification elements

## Contributing Guidelines

### # Code Standards
- Use semantic HTML5 elements
- Follow CSS BEM methodology for naming
- Write clean, commented JavaScript
- Ensure responsive design compatibility
- Test across multiple browsers

### # Contribution Process
1. Fork the repository
2. Create a feature branch (`feature/new-functionality`)
3. Make your changes following coding standards
4. Test thoroughly across devices and browsers
5. Submit a pull request with detailed description

## License & Usage

This educational platform is designed for learning purposes. All external content (images, videos, educational materials) belongs to their respective owners. The codebase can be used as a foundation for similar educational projects.

## Contact & Support

For questions about the RuangRamy platform:
- **Address**: Jl. WR. Supratman Surabaya, Kode Pos: 34523
- **Email**: info@ruangramy.id
- **Phone**: (031) 1234567
- **Social Media**: 
  - Instagram: @RuangRamy.SNBT
  - YouTube: RuangRamy
  - TikTok: RuangRamy.Official

---

© 2025 RuangRamy Belajar SNBT. All Rights Reserved.
