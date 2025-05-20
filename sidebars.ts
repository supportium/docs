import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  // Main sidebar for the repo tutorial (original content)
  tutorialSidebar: [
    'repo-tutorial',
    {
      type: 'category',
      label: 'Tutorial',
      link: {
        type: 'generated-index',
        title: 'Tutorial',
        description: 'Learn the basics of using Docusaurus',
      },
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/markdown-features',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial Extras',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
  
  // Console documentation sidebar
  consoleSidebar: [
    {
      type: 'doc',
      id: 'console/welcome/welcome-to-supportium',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'console/getting-started/what-is-ai-customer-support',
        'console/getting-started/create-your-ai-agent',
        'console/getting-started/test-your-ai-agent',
        'console/getting-started/add-to-website',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'console/features/ai-assistant',
        'console/features/handover',
        'console/features/price-negotiator',
      ],
    },
    {
      type: 'category',
      label: 'FAQs',
      items: [
        'console/faqs/index',
      ],
    },
  ],
};

export default sidebars;
