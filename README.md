# James Lu Portfolio Website

A bold and minimalistic portfolio website showcasing academic and personal projects with a focus on clean design and seamless user experience.

## 🎯 Overview

This portfolio website features a unique split-screen design that immediately presents visitors with two main categories: Academic Projects and Personal Projects. The site prioritizes visual impact through large, full-screen imagery while maintaining exceptional usability and performance.

### Current Projects

**Academic Projects:**
- **Modern Ashtray (ASKFATET)** - Luxury material exploration combining Carrara marble with precision-machined brass
- **Light in the Dark (LUNNE-LAMPAN)** - Crisis-ready lamp with 24-hour battery life and solar charging
- **Memphis Clock** - Postmodern design study applying Memphis movement principles to timepieces
- **The Toothbrush** - Utility-focused portable design with universal compatibility

**Personal Projects:**
- **2Friends Band** - Swedish indie rock band from Hässleholm with energetic live performances
- **Custom Guitar** - Handcrafted musical instrument combining traditional lutherie with contemporary design
- **Event Organization** - Comprehensive approach to creating memorable experiences
- **Musikum Company** - Music booking platform co-founded with Vladimir Radulescu

## ✨ Features

### Design & User Experience
- **Full-screen split-screen homepage** with 16:9 aspect ratio imagery
- **Conditional navigation** that appears only on non-home pages
- **Scrollable project galleries** with two-column layout for multiple images
- **Custom scrollbar styling** for enhanced visual experience
- **Hover effects** with smooth transitions and image scaling
- **Responsive grid layouts** that adapt to different screen sizes
- **Clean typography** with carefully selected font weights and sizes

### Navigation & Structure
- **Homepage**: Split-screen layout directing to Academic or Personal projects
- **Project Lists**: 4 large project cards covering the entire page
- **Project Details**: Individual project pages with detailed features, specifications, and scrollable gallery
- **Image Galleries**: Square aspect ratio images in two-column scrollable layout with up to 8 images per project
- **About Page**: Personal information, downloadable resume, and skills showcase
- **Contact Page**: Contact information and links
- **Breadcrumb navigation** with "JAMES LU" branding

### Technical Features
- Built with **React 18** and **TypeScript** for type safety
- **Tailwind CSS v4** for utility-first styling
- **Custom CSS variables** for consistent theming
- **Image optimization** with fallback components
- **Smooth animations** using CSS transitions
- **Mobile-responsive** design patterns

## 🛠 Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Image Handling**: Custom ImageWithFallback component
- **Icons**: Lucide React
- **Development**: Modern ES6+ JavaScript
- **Build Tool**: Vite (inferred from modern React setup)

## 📁 Project Structure

```
├── App.tsx                 # Main application component and routing
├── components/
│   ├── HomePage.tsx        # Split-screen landing page
│   ├── Navigation.tsx      # Conditional navigation bar
│   ├── ProjectList.tsx     # Grid view of projects
│   ├── ProjectDetail.tsx   # Individual project pages with galleries
│   ├── About.tsx          # About page with resume download
│   ├── Contact.tsx        # Contact page component
│   └── figma/
│       └── ImageWithFallback.tsx  # Image component with fallback
├── src/assets/images/
│   ├── index.ts           # Centralized image management with gallery imports
│   ├── hero/              # Homepage split-screen images
│   │   ├── hero-left-lamp.jpg     # Academic side hero
│   │   └── hero-right-2friend-cap.JPG # Personal side hero
│   ├── about/             # Profile and resume files
│   │   ├── About-Headshot.jpg
│   │   └── About-JamesLu-Resume.pdf
│   └── projects/          # Organized project image folders
│       ├── academic/      # Academic project folders
│       │   ├── modern-ashtray/     # ASKFATET project
│       │   ├── light-in-the-dark/  # LUNNE-LAMPAN project
│       │   ├── memphis-clock/      # Memphis design study
│       │   └── the-toothbrush/     # Portable toothbrush design
│       └── personal/      # Personal project folders
│           ├── 2friends-band/      # Swedish indie rock band (8 images)
│           ├── custom-guitar/      # Handcrafted guitar (6 images)
│           ├── event-organization/ # Event planning project
│           └── musikum-company/    # Music booking platform (3 images)
├── styles/
│   └── globals.css        # Global styles and custom scrollbar
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd james-lu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🎨 Design Principles

### Visual Hierarchy
- **Large-scale imagery** as the primary visual element
- **Minimal text overlay** that doesn't compete with images
- **Consistent spacing** using Tailwind's spacing scale
- **Subtle hover effects** that enhance interactivity

### Color System
- **Primary palette**: Pure white backgrounds with black text
- **Accent colors**: Subtle grays for borders and overlays
- **Image overlays**: Semi-transparent black for text readability
- **Consistent theming** through CSS custom properties

### Typography
- **Font sizing**: 14px base with relative scaling
- **Font weights**: Normal (400) and Medium (500) only
- **Line height**: Consistent 1.5 for optimal readability
- **Hierarchy**: Clear distinction between headings and body text

## 📱 Responsive Design

The website is designed to work seamlessly across all device sizes:

- **Desktop**: Full split-screen experience with hover effects
- **Tablet**: Adapted grid layouts maintaining visual impact
- **Mobile**: Single-column layouts with touch-friendly interactions

## 🔧 Customization

### Adding New Projects
Projects are defined in the `mockProjects` array in `App.tsx`. Each project requires:
- `id`: Unique identifier
- `title`: Project name
- `image`: URL to project main image
- `description`: Detailed project description
- `category`: Either 'academic' or 'personal'

### Managing Project Images
- **Main images**: Stored in `src/assets/images/projects/{category}/{project-name}/main.jpg`
- **Gallery images**: Additional images in same folder (detail-1.jpg, detail-2.jpg, etc.)
- **Image imports**: All gallery images imported in `src/assets/images/index.ts`
- **Gallery display**: Automatically shows in scrollable two-column layout
- **Current galleries**: 2Friends Band (8 images), Custom Guitar (6 images), Musikum Company (3 images), plus detail images for all academic projects
- **File formats**: Supports .jpg, .jpeg, .png with exact extension matching required

### Styling Modifications
- **Global styles**: Edit `/styles/globals.css`
- **Component styles**: Modify Tailwind classes in individual components
- **Color themes**: Update CSS custom properties in the root selector

### Image Management
- Use the `ImageWithFallback` component for all images
- Ensure images are optimized for web (WebP format recommended)
- Maintain consistent aspect ratios for grid layouts

## 🚀 Deployment

The website is static and can be deployed to any hosting service:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use the built files from the `dist` folder
- **Any static hosting**: Upload the production build

## 🔮 Future Enhancements

### Potential Features
- **Animation library integration** for more sophisticated transitions
- **Content Management System** for easy project updates
- **SEO optimization** with meta tags and structured data
- **Dark mode support** using the existing CSS custom properties
- **Internationalization** for multiple language support

### Technical Improvements
- **Image lazy loading** for improved performance
- **Progressive Web App** features for mobile experience
- **Analytics integration** to track user engagement
- **Accessibility enhancements** for screen readers

## 📄 License

This project is for portfolio purposes. Please respect the original design and implementation.

## 👨‍💻 About James Lu

James Lu is a 23-year-old Product Design student with a passion for sustainable design, music, and innovative solutions. As a member of the Swedish indie rock band 2Friends and co-founder of Musikum Company, James brings creative energy to both design projects and entrepreneurial ventures.

**Skills & Expertise:**
- Product Design & CAD Modeling
- Brand Design & Visual Identity
- Sustainable Design Principles
- Music Production & Performance
- Business Development
- Languages: Swedish, English, Mandarin

This portfolio demonstrates proficiency in React, TypeScript, and modern web development practices, showcasing both technical skills and creative vision.

---

For questions or collaboration opportunities, please visit the Contact page on the website.