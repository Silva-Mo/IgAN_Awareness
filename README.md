# IgA Nephropathy - AI Research Manuscript Viewer

## Overview

A highly interactive, VS Code-themed single-page application that presents a comprehensive systematic review on **"Artificial Intelligence for the Diagnosis, Classification, and Prognosis of IgA Nephropathy."**

The application provides a professional, modern interface for presenting complex medical research data through an intuitive file browser system, interactive carousels, syntax-highlighted code/JSON displays, and real-time terminal output.

---

## Features

### 🎨 Design & UI

- **VS Code Aesthetic**: Faithfully recreates Visual Studio Code's layout and color scheme
- **Deep Dark Mode Theme**:
  - Primary Background: `#1E1E1E`
  - Secondary Background: `#252526`
  - Text Color: `#D4D4D4`
  - Accent Color: `#F59E0B` (Gold)
- **Syntax Highlighting**: Classic VS Code syntax colors (Blue, Yellow, Green, Purple)
- **High-Performance Animated Background**: Particle-based animation with grid overlay and dynamic connections

### 📂 File Explorer Navigation

Left sidebar displays research data organized as "files":

1. **00_Awareness.md** - Clinical significance and global burden of IgA Nephropathy
2. **01_Overview_Carousel.html** - Interactive carousel with kidney anatomy SVG diagrams
3. **02_Diagnostics.js** - Multi-omics diagnostic data in code-style format
4. **03_Histopathology.css** - Histopathology metrics displayed as CSS classes
5. **04_Prognosis.json** - AI prognosis model data in JSON format
6. **05_Manuscript_PDF.html** - Call-to-action section with download button

### 🔀 Tab System

- Click files to open in tabbed editor area
- Tabs persist in header with close buttons
- Switch between tabs seamlessly
- "Close All" option to clear workspace

### 🎯 Activity Bar

- **Explorer**: Browse the research file tree
- **Search**: Search functionality for content
- **Download**: View downloadable resources

### 📊 Content Display

Each file type is rendered with appropriate styling:

| File Type     | Display Style                              | Key Data                                                   |
| ------------- | ------------------------------------------ | ---------------------------------------------------------- |
| Markdown      | Rich text preview with syntax highlighting | IgA burden, diagnostic challenges, AI benefits             |
| HTML Carousel | Interactive SVG anatomy diagrams           | Kidney structure, glomerulus cross-section, histopathology |
| JavaScript    | Code-style object notation                 | AUC scores (0.996, 0.952, 0.947)                           |
| CSS           | Property-value pairs                       | MEST-C Agreement (Kappa 0.87), Dice 0.92-0.95              |
| JSON          | Formatted JSON data                        | IMV-LSTM C-index 0.93 for prognosis                        |

### 💻 Terminal Panel

- Bottom integrated terminal UI
- Simulates compilation and analysis processes
- Displays key metrics with typing effect:
  - "Compiling diagnostics... AUC: 0.996 ✓"
  - "Computing prognosis model: C-index 0.93 ✓"
- Updates dynamically based on active tab

### 🎠 Interactive Carousel

- **Slide 1**: Kidney anatomy with glomeruli indicators
- **Slide 2**: Magnified glomerulus cross-section with capillary network
- **Slide 3**: Histopathology visualization with immunofluorescence staining
- Auto-plays every 5 seconds
- Manual navigation with arrow buttons
- Indicator dots for slide tracking

---

## Key Research Data Presented

### Diagnostic Performance

- **Multi-Omics**: AUC 0.996, Sensitivity 99.2%, Specificity 98.7%
- **Urinary Proteomics**: AUC 0.952, NPV 94.8%, 48-hour turnaround
- **Serum Metabolomics**: AUC 0.947, PPV 93.5%, Non-invasive

### Histopathology Metrics

- **MEST-C Agreement**: Kappa 0.87
- **Lesion Segmentation**: Dice Coefficient 0.92-0.95
- **IOU Score**: 0.88-0.91

### Prognosis Prediction

- **Dynamic IMV-LSTM**: C-index 0.93 for 50% eGFR decline over 5.5 years
- **Random Forest Ensemble**: C-index 0.88
- **Top Risk Factors**: Baseline eGFR (34%), Proteinuria (28%), MEST-C Score (22%), Blood Pressure (16%)

---

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build Tool**: Webpack 5
- **CSS Architecture**: CSS Grid, Flexbox, CSS Animations
- **Canvas Animation**: Native HTML5 Canvas API
- **Module System**: ES6 Modules

---

## Installation & Setup

### Prerequisites

- Node.js (v14+)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Development Server

```bash
npm start
# Opens at http://localhost:8080/
```

### Production Build

```bash
npm run build
# Output in dist/ directory
```

---

## Project Structure

```
IgAN_Awareness/
├── src/
│   ├── index.html                 # Main HTML structure (VS Code layout)
│   ├── js/
│   │   ├── index.js              # Entry point - imports CSS and app
│   │   └── manuscript-app.js      # Main application logic (900+ lines)
│   └── css/
│       ├── normalize.css          # CSS reset
│       └── vscode-theme.css       # VS Code theme styling (600+ lines)
├── webpack.common.js             # Shared webpack config
├── webpack.dev.js                # Development config
├── webpack.prod.js               # Production config
├── package.json
├── eslint.config.mjs
└── dist/                          # Build output
```

---

## Code Architecture

### HTML Structure

- **Activity Bar**: Fixed left sidebar with icons
- **Main Container**: Sidebar + Editor Area
- **Sidebar Panels**: Explorer, Search, Download
- **Editor Area**: Tabs header + Dynamic content + Canvas
- **Terminal Panel**: Bottom terminal simulation

### JavaScript Classes

`ManuscriptApp` - Main application controller:

- **Event Management**: Activity bar, file clicks, tab actions
- **Tab System**: Create, switch, close tabs
- **Content Loading**: Dynamic HTML injection for each file
- **Carousel Logic**: Auto-play, navigation, slide updates
- **Terminal Updates**: Typing effect simulation
- **Canvas Animation**: Particle system with connections

### CSS System

- **CSS Variables**: Theme colors, transitions, spacing
- **Grid Layout**: Main container structure
- **Flexbox**: Tabs, terminal, panels
- **Animations**: Pulse, glow effects
- **Responsive Design**: Adapts to smaller screens

---

## File Contents Summary

### 00_Awareness.md

- IgA Nephropathy prevalence (30-50% of glomerulonephritis in East Asia)
- Diagnostic challenges: 21% biopsy rate in Saudi Arabia, 40% bleeding risk
- Inter-observer variability issues (25-40% disagreement)
- AI solution benefits: non-invasive, standardized, rapid

### 01_Overview_Carousel.html

- 3 interactive SVG diagrams showing kidney anatomy
- Auto-rotating carousel with manual controls
- Kidney structure, glomerulus magnification, histopathology visualization

### 02_Diagnostics.js

- Multi-omics integration: AUC 0.996
- Urinary proteomics: AUC 0.952
- Serum metabolomics: AUC 0.947
- Performance comparison table with traditional biopsy

### 03_Histopathology.css

- MEST-C scoring agreement metrics
- Lesion segmentation performance
- Cellular classification accuracy
- Detailed results table

### 04_Prognosis.json

- Dynamic IMV-LSTM model (C-index 0.93)
- Random Forest ensemble (C-index 0.88)
- Feature importance rankings
- Risk factor analysis

### 05_Manuscript_PDF.html

- Call-to-action section with styled button
- Glow hover effect on download button
- Links to additional resources
- Citation information

---

## Customization

### Theme Colors

Edit CSS variables in `src/css/vscode-theme.css`:

```css
:root {
  --bg-primary: #1e1e1e;
  --text-primary: #d4d4d4;
  --accent: #f59e0b;
  /* ... more colors ... */
}
```

### Adding New Files

1. Update HTML with new file item in `.file-tree`
2. Add case in `loadContent()` method in `manuscript-app.js`
3. Create load function (e.g., `loadNewFile()`)

### Canvas Animation Customization

In `initializeCanvas()`:

- Adjust `particleCount` for density
- Modify `gridSize` for grid spacing
- Change colors in `ctx.fillStyle` and `ctx.strokeStyle`

---

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Modern mobile browsers with ES6+ support

---

## Performance

- **Bundle Size**: ~47 KiB (JS + CSS minified)
- **Initial Load**: < 2 seconds on 4G
- **Animation**: 60 FPS with 30 particles
- **Canvas Optimization**: Requestanimationframe, efficient particle calculations

---

## Future Enhancements

- Search functionality in Search panel
- Keyboard shortcuts (Ctrl+P to open files, Ctrl+K to open terminal)
- Dark/Light theme toggle
- Export annotations to PDF
- Responsive mobile layout optimization
- Live data connection for real-time metric updates

---

## License

MIT - See repository for details

---

## Author

Created for IgA Nephropathy AI Research Awareness Campaign  
It deepened my skills in **API handling**, **asynchronous JavaScript** (`async/await` & Promises), and improved my approach to **frontend UI handling**.  
I also implemented **loading components** and basic **frontend error handling** for a better user experience.

Alhamdulillah

## What was needed to complete it:

- Fetching and processing data from a public Weather API
- Using **`async/await`** and **Promises** for clean asynchronous code
- Integrating the **Geolocation API** to get user location-based weather
- Adding **loading components** during data fetch
- Handling simple frontend errors for failed API requests
- Using **dynamic imports** for efficient code splitting
- Creating a responsive and visually appealing UI

## Challenges that I’ve overcome:

- Working with the **Geolocation API** while managing user permissions and errors
- Implementing **dynamic imports** without breaking the Webpack build
- Ensuring smooth loading states and clear error messages
- Handling asynchronous code in a modular, maintainable way
- Making the UI responsive and consistent across devices

## Tech Stack

- JavaScript (ES6)
- HTML5
- CSS3 (Flexbox & Grid)
- Webpack
- Weather API

---

✅ Built with care — feel free to explore or contribute!
