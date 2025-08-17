# James Lu Portfolio Website

A bold and minimalistic portfolio website showcasing academic and personal projects with a focus on clean design and seamless user experience.

## 🎯 Overview

This portfolio website features a unique split-screen design that immediately presents visitors with two main categories: Academic Projects and Personal Projects. The site prioritizes visual impact through large, full-screen imagery while maintaining exceptional usability and performance.

## ✨ Features

### Design & User Experience
- **Full-screen split-screen homepage** with 16:9 aspect ratio imagery
- **Conditional navigation** that appears only on non-home pages
- **No-scroll design** - all content fits within the viewport
- **Hover effects** with smooth transitions and image scaling
- **Responsive grid layouts** that adapt to different screen sizes
- **Clean typography** with carefully selected font weights and sizes

### Navigation & Structure
- **Homepage**: Split-screen layout directing to Academic or Personal projects
- **Project Lists**: 4 large project cards covering the entire page
- **Project Details**: Individual project pages with large image and description
- **About Page**: Personal information and background
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
│   ├── ProjectDetail.tsx   # Individual project pages
│   ├── About.tsx          # About page component
│   ├── Contact.tsx        # Contact page component
│   └── figma/
│       └── ImageWithFallback.tsx  # Image component with fallback
├── styles/
│   └── globals.css        # Global styles and CSS variables
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
- `image`: URL to project image
- `description`: Detailed project description
- `category`: Either 'academic' or 'personal'

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

## 👨‍💻 About

Designed and developed as a showcase of modern web development practices, emphasizing clean design, performance, and user experience. The website demonstrates proficiency in React, TypeScript, and modern CSS techniques.

---

For questions or collaboration opportunities, please visit the Contact page on the website.