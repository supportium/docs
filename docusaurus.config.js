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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
          // editUrl: 'https://github.com/supportium-ai/docs/edit/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/supportium-social-card.jpg',
      navbar: {
        title: 'Supportium AI',
        logo: {
          alt: 'Supportium AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation',
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
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Introduction', to: '/' },
              { label: 'Getting Started', to: '/category/getting-started' },
              { label: 'Features', to: '/category/features' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'Supportium AI Website', href: 'https://supportium.ai' },
              { label: 'Blog', href: 'https://supportium.ai/blog' }, 
              { label: 'Contact Us', href: 'https://supportium.ai/contact' }, 
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Privacy Policy', href: 'https://supportium.ai/privacy' }, 
              { label: 'Terms of Service', href: 'https://supportium.ai/terms' }, 
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Supportium AI. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
