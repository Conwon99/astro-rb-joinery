# Generic Prompt for Converting React/Vite Project to Astro.js

Convert this full project from React + Vite + React Router to Astro.js. Follow these steps systematically:

## 1. Update Dependencies
- Remove `react-router-dom` and `react-helmet-async` from package.json dependencies
- Add Astro dependencies to devDependencies:
  - `astro` (latest v4.x)
  - `@astrojs/react` (latest)
  - `@astrojs/tailwind` (latest, ~5.1.0)
  - `@astrojs/check` (optional, for type checking)
- Update npm scripts:
  - `dev`: `astro dev`
  - `build`: `astro build`
  - `preview`: `astro preview`

## 2. Create Astro Configuration
- Create `astro.config.mjs` with:
  - React integration enabled
  - Tailwind integration (set `applyBaseStyles: false` if you have custom base styles)
  - Static output mode (`output: 'static'`)
  - Path aliases matching existing setup (e.g., `@: '/src'`)
  - Server configuration matching existing port/host settings

## 3. Create Base Layout Component
- Create `src/layouts/Layout.astro` that:
  - Imports global CSS files
  - Accepts SEO props: `title`, `description`, `canonical`, `image` (with sensible defaults)
  - Includes all SEO metadata (meta tags, OpenGraph, Twitter cards)
  - Includes analytics scripts if present
  - Includes JSON-LD structured data if used
  - Includes favicon and font links
  - Renders `<slot />` for page content

## 4. Convert React Router Pages to Astro Pages
For each route/page in your React Router setup:
- Create corresponding `.astro` file in `src/pages/`
- Convert route paths to file structure:
  - `/` → `src/pages/index.astro`
  - `/about` → `src/pages/about.astro`
  - `/products/item` → `src/pages/products/item.astro`
  - `*` (catch-all) → `src/pages/404.astro`
- In each Astro page:
  - Import `Layout` component
  - Import React components needed for that page
  - Add `client:load` directive to all React components
  - Convert `className` to `class` in Astro template sections (keep `className` in React components)
  - Wrap page-specific scripts in `<script>` tags if needed
  - Preserve all page functionality and content

## 5. Remove React Router Dependencies from Components
- Search entire codebase for imports from `react-router-dom`
- Replace:
  - `useLocation()` hook → Use `window.location.pathname` with React state/effect hooks
  - `<Link to="...">` components → Regular `<a href="...">` tags or hash-based scrolling
  - `useNavigate()` hook → Use `window.location.href` or hash-based scrolling
  - `useParams()` → Extract from URL using `window.location` or Astro's `Astro.params`
- Update navigation components to work with static routing:
  - Remove Router context dependencies
  - Use hash-based scrolling for same-page navigation
  - Use full URLs for cross-page navigation

## 6. Remove react-helmet-async Dependencies
- Search for all `<Helmet>` components
- Remove all `react-helmet-async` imports
- Move SEO metadata to:
  - Layout component for site-wide meta tags
  - Individual Astro pages for page-specific metadata
  - Move structured data (JSON-LD) to appropriate Astro pages/layouts

## 7. Update Configuration Files
- **TypeScript**: Update `tsconfig.json` to extend `"astro/tsconfigs/strict"` (or `"astro/tsconfigs/base"` for less strict)
- **Tailwind**: Update `tailwind.config.ts` content paths to include Astro files:
  ```ts
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"]
  ```
- **PostCSS**: No changes needed (Astro uses existing PostCSS config)

## 8. Clean Up Old Files
Delete files that are no longer needed:
- `src/App.tsx` (or equivalent root component)
- `src/main.tsx` (or equivalent entry point)
- `index.html` (if exists at root)
- `vite.config.ts` (replaced by `astro.config.mjs`)
- All old React Router page components (`.tsx` files in `src/pages/`)

## 9. Update Deployment Configuration
- Update deployment configs (e.g., `netlify.toml`, `vercel.json`):
  - Remove SPA redirect rules (Astro generates static HTML)
  - Ensure build command uses `npm run build`
  - Ensure output directory is `dist` (Astro default)

## 10. Handle Component Hydration
- For all React components used in Astro pages, add appropriate client directive:
  - `client:load` - Load and hydrate immediately (for interactive components)
  - `client:idle` - Load when browser is idle (for less critical components)
  - `client:visible` - Load when visible in viewport (for lazy-loaded components)
- Ensure interactive components (forms, modals, dropdowns) have `client:load`

## 11. Preserve Existing Functionality
- Analytics: Ensure analytics scripts work with static generation (use Astro's `is:inline` for scripts that need to run on page load)
- Forms: Verify form handling works (may need to adjust to handle static generation)
- API calls: If using client-side data fetching, ensure it works with hydration
- Routing: Ensure all navigation and linking works correctly

## Expected Result
After conversion:
- Project builds and runs with Astro
- All pages accessible via file-based routing
- React components hydrate only where specified
- SEO metadata preserved
- All existing functionality works
- Static HTML files generated at build time

## Testing Checklist
After conversion, verify:
1. All pages load correctly
2. Navigation works (hash links, cross-page links)
3. Interactive components work (forms, modals, etc.)
4. Analytics tracks page views
5. SEO metadata is present in HTML output
6. Build completes successfully (`npm run build`)
7. Production preview works (`npm run preview`)

## Important Notes
- Keep all React components unchanged - they work with Astro's React integration
- Use `client:load` directive for components that need interactivity
- Preserve all existing functionality and features
- Maintain public folder structure (Astro uses `public/` by default)
- Convert `className` to `class` only in Astro template sections, not in React components


