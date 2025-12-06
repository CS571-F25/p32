# Recipe Finder

A modern, accessible recipe search website built with React, React Bootstrap, and React Router.

## Features

- **Search Recipes**: Search for recipes by ingredients with two modes:
  - **Precise Mode**: Recipes must contain all specified ingredients
  - **Fuzzy Mode**: Recipes containing any specified ingredient will be shown
- **Save Recipes**: Save your favorite recipes for easy access
- **Recipe Details**: View detailed information about each recipe including ingredients and instructions
- **Accessible Design**: Fully accessible with WCAG AA compliance
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices

## Technology Stack

- React 19
- React Bootstrap 2.10
- React Router 7
- Vite
- Bootstrap 5

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cs571-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `docs` directory.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages automatically via GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Commit and push the `docs` folder:
```bash
git add docs
git commit -m "Deploy to GitHub Pages"
git push
```

3. In your GitHub repository settings:
   - Go to Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select the `main` branch and `/docs` folder
   - Save

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages when you push to the `main` branch.

## Accessibility Features

This website meets WCAG AA standards with the following accessibility features:

- ✅ No skipped heading levels (h1 → h2 → h3)
- ✅ Appropriate alt text on all images
- ✅ Sufficient color contrast (WCAG AA compliant)
- ✅ All inputs appropriately labeled
- ✅ All forms completable via keyboard
- ✅ Skip to main content link
- ✅ Proper ARIA labels and roles
- ✅ Keyboard navigation support

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── AccessibleImage.jsx
│   ├── DetailsView.jsx
│   ├── EmptyState.jsx
│   ├── FilterChips.jsx
│   ├── Footer.jsx
│   ├── IngredientTag.jsx
│   ├── ModeBadge.jsx
│   ├── MyNavbar.jsx
│   ├── RecipeCard.jsx
│   ├── RecipeList.jsx
│   ├── SearchBar.jsx
│   └── Security.jsx
├── pages/            # Page components
│   ├── DetailsPage.jsx
│   ├── SavedPage.jsx
│   └── SearchPage.jsx
├── styles/           # CSS styles
│   └── contrast.css
├── App.jsx           # Main app component
├── main.jsx          # Entry point
├── recipes.js        # Recipe data
└── index.css         # Global styles
```

## Components

The project includes 12+ components:

1. **AccessibleImage** - Image component with proper alt text
2. **DetailsView** - Recipe details display component
3. **EmptyState** - Empty state message component
4. **FilterChips** - Active filter display component
5. **Footer** - Site footer
6. **IngredientTag** - Ingredient badge component
7. **ModeBadge** - Search mode indicator
8. **MyNavbar** - Main navigation bar
9. **RecipeCard** - Individual recipe card
10. **RecipeList** - List of recipe cards
11. **SearchBar** - Search input and mode selector
12. **Security** - Security/error page

## License

© 2025 Recipe Finder. All rights reserved.
