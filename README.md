# Supportium AI Documentation

[![Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-blue?logo=docusaurus)](https://docusaurus.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)](https://nodejs.org/)

This is the official documentation site for Supportium AI, built using [Docusaurus](https://docusaurus.io/) v3.8.1+ - a modern static website generator optimized for documentation.

## Features

- 📚 Comprehensive documentation structure with optimized navigation
- 🔍 Built-in local search functionality
- 🎨 Custom Supportium AI brand styling with dark/light theme support
- 📱 Fully responsive design with mobile-optimized navigation
- ♿ Enhanced accessibility features and WCAG compliance
- 🚀 Performance optimized with modern web standards
- 🔧 Advanced configuration with SEO optimization
- 📊 Analytics ready with proper meta tags

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd <repository-folder>

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm start
```

This command starts a local development server and opens up a browser window at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

### Build

```bash
# Generate static content for production
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve Production Build

```bash
# Test the production build locally
npm run serve
```

This serves the built site locally for testing before deployment.

## Project Structure

```
docs/
├── docs/                          # Documentation pages
│   ├── intro.md                  # Homepage content
│   ├── start-here/               # Getting started guides
│   ├── account-management/       # Account & billing docs
│   ├── features/                 # Feature documentation
│   ├── api-documentation/        # API reference
│   ├── security-privacy/         # Security & privacy info
│   ├── faq/                      # Frequently asked questions
│   └── troubleshooting/          # Troubleshooting guides
├── src/
│   └── css/
│       └── custom.css            # Custom Supportium AI styling
├── static/                       # Static assets (images, favicon, etc.)
├── docusaurus.config.js          # Main configuration file
├── sidebars.js                   # Navigation sidebar configuration
└── package.json                  # Dependencies and scripts
```

## Configuration

### Main Configuration

The site configuration is in `docusaurus.config.js` and includes:

- **SEO optimizations**: Meta tags, OpenGraph, sitemap generation
- **Performance features**: Modern font loading, optimized bundles
- **Search integration**: Local search with highlighting
- **Brand customization**: Supportium AI colors and styling
- **Accessibility enhancements**: Screen reader support, keyboard navigation

### Sidebar Navigation

Navigation is configured in `/Users/home/Downloads/docs/sidebars.js` with:

- Logical content organization following user journey
- Category descriptions for better UX
- Collapsible sections for easier navigation
- Proper linking structure

### Custom Styling

Brand-specific styling in `/Users/home/Downloads/docs/src/css/custom.css` includes:

- Supportium AI brand colors (`#2563eb` primary)
- Enhanced typography with system fonts
- Improved code syntax highlighting
- Responsive design optimizations
- Dark/light theme support
- Accessibility improvements

## Content Management

### Adding New Pages

1. Create a new `.md` file in the appropriate directory under `docs/`
2. Add proper frontmatter:
   ```yaml
   ---
   id: page-id
   title: Page Title
   sidebar_position: 1
   ---
   ```
3. Update `/Users/home/Downloads/docs/sidebars.js` to include the new page

### Writing Content

- Use MDX format for interactive content
- Follow the established heading hierarchy (H2-H4 for TOC)
- Include relevant cross-references to other documentation
- Add code examples with proper language highlighting
- Use admonitions for important notes and warnings

## Deployment

### GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

### Custom Hosting

1. Run `npm run build`
2. Upload the contents of the `build` directory to your hosting service
3. Ensure proper routing for client-side navigation

## Development Guidelines

### Code Style

- Follow the existing file naming conventions
- Use descriptive filenames and folder structures
- Maintain consistent markdown formatting
- Include proper alt text for images

### Performance

- Optimize images before adding to `/static/img/`
- Use appropriate image formats (WebP when possible)
- Keep bundle size optimized by avoiding unnecessary dependencies
- Test build performance regularly

### Accessibility

- Use semantic HTML structure
- Include proper heading hierarchy
- Add alt text for all images
- Test with screen readers when possible
- Ensure sufficient color contrast

## Troubleshooting

### Common Issues

1. **Build failures**: Check for broken internal links
2. **Styling issues**: Verify custom CSS doesn't conflict with theme
3. **Search not working**: Ensure search plugin is properly configured
4. **Performance issues**: Audit bundle size and optimize assets

### Getting Help

- Check the [Docusaurus documentation](https://docusaurus.io/docs)
- Review existing GitHub issues
- Contact the development team

## Contributing

1. Follow the established documentation structure
2. Test builds locally before submitting
3. Ensure all links work correctly
4. Maintain consistent formatting and style
5. Update this README if adding new features or changing structure

---

Built with ❤️ using [Docusaurus](https://docusaurus.io/) for Supportium AI documentation.
