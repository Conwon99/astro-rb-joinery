# Google Search Console Indexing Issues - Fixes Applied

## Issues Identified:
1. **1 page with redirect** - Old SPA redirects from previous setup
2. **2 pages excluded by 'noindex' tag** - 404 page (correct) + possibly old cached page
3. **1 page crawled but currently not indexed** - Needs investigation

## Fixes Applied:

### 1. Removed SPA Redirects
- **File:** `public/_redirects`
- **Issue:** Old redirect rules were causing pages to redirect unnecessarily
- **Fix:** Removed all SPA redirects since Astro generates static HTML files
- **Result:** Pages now serve directly without redirects

### 2. Verified Robots Tags
- **404 page:** Correctly set to `noindex, nofollow` (this is expected)
- **All other pages:** Use default `index, follow` from Layout component
- **Status:** Only 404 should have noindex, all other pages are indexable

### 3. Sitemap Configuration
- **File:** `public/sitemap.xml`
- **Status:** Updated with correct domain (rbjoinery.com) and all pages listed
- **Pages included:**
  - Homepage (/)
  - Service pages (house-extensions, loft-conversions, garden-rooms, kitchen-installation, home-improvements)
  - Location pages (glasgow, ayrshire)

### 4. Robots.txt
- **File:** `public/robots.txt`
- **Status:** Allows all search engines to crawl
- **Sitemap reference:** Points to https://rbjoinery.com/sitemap.xml

## Next Steps for Google Search Console:

### 1. Request Re-indexing
After deploying the fixes:
1. Go to Google Search Console
2. Use "URL Inspection" tool
3. Test each affected URL
4. Click "Request Indexing" for each page

### 2. Check Which Pages Have Issues
1. Click on "Excluded by 'noindex' tag" - verify which 2 pages are listed
2. Click on "Page with redirect" - verify which page is redirecting
3. Click on "Crawled - currently not indexed" - see which page needs attention

### 3. Submit Updated Sitemap
1. Go to Sitemaps section in GSC
2. Submit: `https://rbjoinery.com/sitemap.xml`
3. This will help Google discover all pages faster

### 4. Monitor Status
- Check back in 1-2 weeks after deployment
- Use "URL Inspection" to verify indexing status
- Monitor "Coverage" report for improvements

## Expected Results:
- ✅ No more redirect issues (pages serve directly)
- ✅ Only 404 page has noindex (correct behavior)
- ✅ All other pages should be indexed
- ✅ Sitemap helps Google discover all pages

## Important Notes:
- The "2 pages with noindex" might include:
  - 404 page (correct - should not be indexed)
  - Possibly an old cached version or staging URL
- The "crawled but not indexed" page might just need time, or may need content improvements
- After deployment, it may take 1-2 weeks for Google to re-crawl and update indexing status


