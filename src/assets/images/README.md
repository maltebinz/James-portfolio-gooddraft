# Image Assets Guide

## 📁 Folder Structure
```
src/assets/images/
├── hero/
│   ├── academic-hero.jpg     (16:9 ratio, 1920x1080px recommended)
│   └── personal-hero.jpg     (16:9 ratio, 1920x1080px recommended)
├── projects/
│   ├── academic/
│   │   ├── architectural-research.jpg
│   │   ├── interior-space-studies.jpg
│   │   ├── creative-workspace-design.jpg
│   │   └── product-innovation-lab.jpg
│   └── personal/
│       ├── personal-brand-identity.jpg
│       ├── minimalist-living.jpg
│       ├── digital-craft-studio.jpg
│       └── experimental-materials.jpg
└── about/
    └── profile.jpg           (3:4 ratio recommended)
```

## 🎯 Usage Examples

### Simple Reference:
```tsx
import { images } from '../assets/images'

// Use in components:
<img src={images.academicHero} alt="Academic Projects" />
<img src={images.projects.academic.architecturalResearch} alt="Project 1" />
<img src={images.profile} alt="James Lu" />
```

### In Project Data:
```tsx
const projects = [
  {
    id: '1',
    title: 'Architectural Research',
    image: images.projects.academic.architecturalResearch,
    // ...
  }
]
```

## 📐 Recommended Image Sizes
- **Hero Images**: 1920x1080px (16:9)
- **Project Cards**: 1200x800px minimum
- **Profile**: 600x800px (3:4 ratio)
- **Format**: JPG or WebP for best performance