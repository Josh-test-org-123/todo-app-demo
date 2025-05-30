# Deployment Instructions for Cloudflare Pages

## Quick Deploy Steps

### 1. Build the Application

```bash
npm run build
```

### 2. Deploy to Cloudflare Pages

#### Option A: Git Integration (Recommended)

1. Push this repository to GitHub/GitLab
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Use these build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: Leave blank (or `todo-app` if this is in a subdirectory)
6. Click "Save and Deploy"

#### Option B: Direct Upload

1. Build locally: `npm run build`
2. Go to Cloudflare Pages → "Create a project" → "Direct upload"
3. Upload the `out` folder
4. Click "Deploy site"

### 3. Custom Domain (Optional)

1. In your Cloudflare Pages project settings
2. Go to "Custom domains" tab
3. Add your domain and follow DNS instructions

## Build Configuration

The project is pre-configured for Cloudflare Pages:

- ✅ Static export enabled (`output: 'export'`)
- ✅ Trailing slashes configured
- ✅ Images optimized for static export
- ✅ Headers file for caching and security
- ✅ Wrangler configuration

## Environment Variables

No environment variables are required for basic functionality since the app uses client-side local storage.

## Performance Optimizations

The app includes:

- Static file generation for fast loading
- Optimized bundle size
- Proper caching headers
- Security headers
- Responsive images

## Custom Redirects

If you need redirects, create a `_redirects` file in the public folder:

```
/old-path /new-path 301
/api/* /api/index.html 200
```

## Troubleshooting

### Build Fails

- Ensure Node.js 18+ is installed
- Run `npm install` to ensure dependencies are up to date
- Check for TypeScript errors with `npm run lint`

### Page Not Loading

- Verify the build output directory is set to `out`
- Check if any absolute paths need to be made relative
- Ensure all static assets are properly referenced

### Performance Issues

- Enable Cloudflare's minification in Pages settings
- Use Cloudflare's image optimization if adding images
- Monitor Core Web Vitals in Cloudflare Analytics

## Support

For Cloudflare Pages specific issues:

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)

For Next.js static export issues:

- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
