// Centralized Image Management
// Using your local images

// Hero Images - Using your uploaded images
import academicHeroImg from './hero/hero-left-lamp.jpg'
import personalHeroImg from './hero/hero-right-2friend-cap.JPG'

// Academic Project Images - Main images
import academic1Img from './projects/academic/modern-ashtray/main.jpg'
import academic2Img from './projects/academic/light-in-the-dark/main.jpg'
import academic3Img from './projects/academic/memphis-clock/main.jpg'
import academic4Img from './projects/academic/the-toothbrush/main.jpg'

// Personal Project Images - Main images
import personal1Img from './projects/personal/event-organization/main.jpg'
import personal2Img from './projects/personal/custom-guitar/main.jpg'
import personal3Img from './projects/personal/2friends-band/main.jpg'
import personal4Img from './projects/personal/musikum-company/main.jpg'

// Musikum Company Gallery Images
import musikumDetail1 from './projects/personal/musikum-company/detail-1.jpg'
import musikumDetail2 from './projects/personal/musikum-company/detail-2.jpg'
import musikumDetail3 from './projects/personal/musikum-company/detail-3.jpg'

// Note: Additional gallery images will be imported as they are added to project folders

// About Image - Using your uploaded headshot
import profileImg from './about/About-Headshot.jpg'

// Simple, clean export object
export const images = {
  // Hero images for homepage
  academicHero: academicHeroImg,
  personalHero: personalHeroImg,
  
  // Project images - easy to reference
  projects: {
    academic: {
      architecturalResearch: academic1Img,
      interiorSpaceStudies: academic2Img,
      creativeWorkspaceDesign: academic3Img,
      productInnovationLab: academic4Img,
    },
    personal: {
      personalBrandIdentity: personal1Img,
      minimalistLiving: personal2Img,
      digitalCraftStudio: personal3Img,
      experimentalMaterials: personal4Img,
    }
  },
  
  // About page
  profile: profileImg,
}

// Project Gallery Images - Multiple images per project
// Currently using placeholders until images are added to project folders
export const projectGalleries = {
  academic: {
    'Modern Ashtray': {
      main: academic1Img,
      gallery: [] // Will be populated when images are added
    },
    'Light in the Dark': {
      main: academic2Img,
      gallery: [] // Will be populated when images are added
    },
    'Memphis Clock': {
      main: academic3Img,
      gallery: [] // Will be populated when images are added
    },
    'The Toothbrush': {
      main: academic4Img,
      gallery: [] // Will be populated when images are added
    }
  },
  personal: {
    'Event Organization': {
      main: personal1Img,
      gallery: [] // Will be populated when images are added
    },
    'Custom Guitar': {
      main: personal2Img,
      gallery: [] // Will be populated when images are added
    },
    '2Friends Band': {
      main: personal3Img,
      gallery: [] // Will be populated when images are added
    },
    'Musikum Company': {
      main: personal4Img,
      gallery: [musikumDetail1, musikumDetail2, musikumDetail3]
    }
  }
}

// Alternative: Array format for easy mapping
export const projectImages = {
  academic: [academic1Img, academic2Img, academic3Img, academic4Img],
  personal: [personal1Img, personal2Img, personal3Img, personal4Img],
}