// Centralized Image Management
// Using your local images

// Hero Images - Using your uploaded images
import academicHeroImg from './hero/hero-left-lamp.jpg'
import personalHeroImg from './hero/hero-right-2friend-cap.jpg'

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

// Academic Project Gallery Images
// Modern Ashtray
import ashtrayDetail1 from './projects/academic/modern-ashtray/detail-1.png'
import ashtrayDetail2 from './projects/academic/modern-ashtray/detail-2.jpg'

// Light in the Dark
import lightDetail1 from './projects/academic/light-in-the-dark/detail-1.jpg'
import lightDetail2 from './projects/academic/light-in-the-dark/detail-2.jpg'
import lightDetail3 from './projects/academic/light-in-the-dark/detail-3.jpg'

// Memphis Clock
import memphisDetail1 from './projects/academic/memphis-clock/detail-1.jpg'
import memphisDetail2 from './projects/academic/memphis-clock/detail-2.jpg'
import memphisDetail3 from './projects/academic/memphis-clock/detail-3.jpeg'

// The Toothbrush
import toothbrushDetail1 from './projects/academic/the-toothbrush/detail-1.jpg'
import toothbrushDetail2 from './projects/academic/the-toothbrush/detail-2.jpg'

// Personal Project Gallery Images
// 2Friends Band
import bandDetail1 from './projects/personal/2friends-band/detail-1.jpg'
import bandDetail2 from './projects/personal/2friends-band/detail-2.jpeg'
import bandDetail3 from './projects/personal/2friends-band/detail-3.jpeg'
import bandDetail4 from './projects/personal/2friends-band/detail-4.jpeg'
import bandDetail5 from './projects/personal/2friends-band/detail-5.jpeg'
import bandDetail6 from './projects/personal/2friends-band/detail-6.jpg'
import bandDetail7 from './projects/personal/2friends-band/detail-7.jpeg'
import bandDetail8 from './projects/personal/2friends-band/detail-8.jpg'

// Custom Guitar
import guitarDetail1 from './projects/personal/custom-guitar/detail-1.jpg'
import guitarDetail2 from './projects/personal/custom-guitar/detail-2.jpeg'
import guitarDetail3 from './projects/personal/custom-guitar/detail-3.jpeg'
import guitarDetail4 from './projects/personal/custom-guitar/detail-4.jpg'
import guitarDetail5 from './projects/personal/custom-guitar/detail-5.jpeg'
import guitarDetail6 from './projects/personal/custom-guitar/detail-6.jpeg'

// Musikum Company
import musikumDetail1 from './projects/personal/musikum-company/detail-1.jpg'
import musikumDetail2 from './projects/personal/musikum-company/detail-2.jpg'
import musikumDetail3 from './projects/personal/musikum-company/detail-3.jpg'

// About Image - Using your uploaded headshot
import profileImg from './about/About-Headshot.jpg'

// Contact Background Image
import contactBgImg from './contact/background.jpg'

// Simple, clean export object
export const images = {
  // Hero images for homepage
  academicHero: academicHeroImg,
  personalHero: personalHeroImg,
  
  // Project images - easy to reference
  projects: {
    academic: {
      modernAshtray: academic1Img,
      lightInTheDark: academic2Img,
      memphisClock: academic3Img,
      theToothbrush: academic4Img,
    },
    personal: {
      eventOrganization: personal1Img,
      customGuitar: personal2Img,
      twoFriendsBand: personal3Img,
      musikumCompany: personal4Img,
    }
  },
  
  // About page
  profile: profileImg,
  
  // Contact page
  contactBackground: contactBgImg,
}

// Project Gallery Images - Multiple images per project
// Currently using placeholders until images are added to project folders
export const projectGalleries = {
  academic: {
    'Modern Ashtray': {
      main: academic1Img,
      gallery: [ashtrayDetail1, ashtrayDetail2]
    },
    'Light in the Dark': {
      main: academic2Img,
      gallery: [lightDetail1, lightDetail2, lightDetail3]
    },
    'Memphis Clock': {
      main: academic3Img,
      gallery: [memphisDetail1, memphisDetail2, memphisDetail3]
    },
    'The Toothbrush': {
      main: academic4Img,
      gallery: [toothbrushDetail1, toothbrushDetail2]
    }
  },
  personal: {
    'Event Organization': {
      main: personal1Img,
      gallery: [] // No additional images yet
    },
    'Custom Guitar': {
      main: personal2Img,
      gallery: [guitarDetail1, guitarDetail2, guitarDetail3, guitarDetail4, guitarDetail5, guitarDetail6]
    },
    '2Friends Band': {
      main: personal3Img,
      gallery: [bandDetail1, bandDetail2, bandDetail3, bandDetail4, bandDetail5, bandDetail6, bandDetail7, bandDetail8]
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