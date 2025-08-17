# Project Image Structure

## 📁 Individual Project Folders

Each project now has its own dedicated folder for multiple images:

### Academic Projects
```
academic/
├── modern-ashtray/
│   ├── main.jpg           (Hero image for project cards)
│   ├── detail-1.jpg       (Process shots)
│   ├── detail-2.jpg       (Different angles)
│   └── process.jpg        (Design process)
├── light-in-the-dark/
│   ├── main.jpg           (LUNNE-LAMPAN hero)
│   ├── features.jpg       (Feature highlights)
│   ├── in-use.jpg         (Usage scenarios)
│   └── technical.jpg      (Technical details)
├── memphis-clock/
│   ├── main.jpg           (Clock hero image)
│   ├── details.jpg        (Close-up details)
│   ├── colors.jpg         (Color variations)
│   └── inspiration.jpg    (Memphis inspiration)
└── the-toothbrush/
    ├── main.jpg           (Toothbrush hero)
    ├── ergonomics.jpg     (Ergonomic features)
    ├── materials.jpg      (Material breakdown)
    └── testing.jpg        (User testing)
```

### Personal Projects
```
personal/
├── event-organization/
│   ├── main.jpg           (Event hero image)
│   ├── planning.jpg       (Planning process)
│   ├── execution.jpg      (Event execution)
│   └── results.jpg        (Event outcomes)
├── custom-guitar/
│   ├── main.jpg           (Guitar hero image)
│   ├── crafting.jpg       (Building process)
│   ├── details.jpg        (Detail shots)
│   └── finished.jpg       (Final product)
├── 2friends-band/
│   ├── main.jpg           (Band hero image)
│   ├── performance.jpg    (Live performance)
│   ├── studio.jpg         (Studio work)
│   └── branding.jpg       (Brand materials)
└── musikum-company/
    ├── main.jpg           (Musikum hero image)
    ├── platform.jpg       (Platform screenshots)
    ├── branding.jpg       (Brand materials)
    └── team.jpg           (Team photos)
```

## 🎯 Usage
- **main.jpg**: Primary image shown in project cards and headers
- **Additional images**: Can be used in project detail galleries
- **Consistent naming**: Makes it easy to reference specific images
- **Scalable structure**: Easy to add more images per project

## 🔧 Implementation
Update image imports in `src/assets/images/index.ts` to reference the main images:
```tsx
// Example:
import modernAshtrayMain from './projects/academic/modern-ashtray/main.jpg'
```

For project galleries, create additional imports as needed for each project's detail page.