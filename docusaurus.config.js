// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Supportium AI Documentation',
  tagline: 'Powerful AI Support Solutions',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.supportium.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'supportium',
  projectName: 'supportium-docs',

  onBrokenLinks: process.env.CI ? 'throw' : 'warn',
  onBrokenMarkdownLinks: process.env.CI ? 'throw' : 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/supportium/docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    // Add search functionality
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO and social media
      image: 'img/supportium-social-card.jpg',
      metadata: [
        {name: 'keywords', content: 'supportium, ai, customer support, documentation, api'},
        {name: 'description', content: 'Comprehensive documentation for Supportium AI - the powerful AI customer support platform'},
        {name: 'author', content: 'Supportium AI'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'Supportium AI Documentation'},
      ],
      
      // Navbar configuration
      navbar: {
        title: 'Supportium AI',
        logo: {
          alt: 'Supportium AI Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg', // Add dark mode logo support
        },
        hideOnScroll: true, // Hide navbar when scrolling down
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://console.supportium.ai',
            label: 'Console',
            position: 'right',
            className: 'header-console-link',
          },
          {
            href: 'https://supportium.ai',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/supportium',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      // Color mode configuration
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Introduction', to: '/' },
              { label: 'Getting Started', to: '/category/getting-started' },
              { label: 'Features', to: '/category/features' },
              { label: 'API Documentation', to: '/category/api-documentation' },
              { label: 'FAQ', to: '/category/faq' },
            ],
          },
          {
            title: 'Product',
            items: [
              { label: 'Supportium Console', href: 'https://console.supportium.ai' },
              { label: 'Supportium Website', href: 'https://supportium.ai' },
              { label: 'Blog', href: 'https://supportium.ai/blog' }, 
              { label: 'Contact Support', href: 'https://supportium.ai/contact' }, 
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/supportium' },
              { label: 'Twitter', href: 'https://twitter.com/supportiumai' },
              { label: 'LinkedIn', href: 'https://linkedin.com/company/supportium' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Privacy Policy', to: '/security-privacy/privacy' }, 
              { label: 'Terms of Service', href: 'https://supportium.ai/terms' },
              { label: 'Security', to: '/security-privacy/security' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Supportium AI. All rights reserved.`,
      },
      
      // Enhanced search and docs features
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      
      // Table of Contents
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'diff', 'json', 'javascript', 'typescript', 'php', 'python', 'ruby', 'go'],
        defaultLanguage: 'javascript',
      },
      
      // Announcement bar for important updates
      announcementBar: {
        id: 'supportium_docs_v2', // Increment on change
        content:
          '📚 Welcome to the new Supportium AI documentation! <a target="_blank" rel="noopener noreferrer" href="https://supportium.ai/blog">Check out our latest updates</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),
};

export default config;
