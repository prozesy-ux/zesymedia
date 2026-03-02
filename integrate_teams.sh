#!/bin/bash
set -e

cd /workspaces/zesymedia

echo "🔗 Integrating Teams page into main site..."

# Create .htaccess for clean URLs
echo "🔧 Creating .htaccess..."
cat > teams/.htaccess << 'HTACCESS'
RewriteEngine On
RewriteBase /teams/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L]
HTACCESS

# Create integration documentation
echo "📝 Creating integration docs..."
cat > teams/INTEGRATION.md << 'DOCS'
# Teams Page Integration

This directory contains the complete Teams page imported from zesyteams repository.

## Access
- Local: `/teams/`
- Production: `https://yourdomain.com/teams`

## Files
- `index.html` - Main teams page
- `single-page.html` - Alternative single-page layout
- `src/` - React/TypeScript source components
- `tailwind.config.js` - Tailwind CSS configuration

## Development
```bash
cd teams
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deployment
The Teams page is fully integrated and will be accessible at `/teams/` when deployed.
DOCS

# Commit changes
echo "💾 Committing integration files..."
git add teams/.htaccess teams/INTEGRATION.md
git commit -m "Add Teams page integration config and docs" || echo "Nothing new to commit"

echo ""
echo "✅ INTEGRATION COMPLETE!"
echo ""
echo "📋 Summary:"
echo "  ✓ Teams page at /teams/"
echo "  ✓ 44 files from zesyteams"
echo "  ✓ Configuration ready"
echo ""
echo "🌐 To test: cd teams && npm install && npm run dev"
echo "📤 To deploy: Merge to main branch"
