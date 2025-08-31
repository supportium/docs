---
id: sitesync-adding-and-syncing-your-website-content
title: SiteSync - Adding And Syncing Your Website Content
hide_title: true
---

# SiteSync — Adding & Syncing Your Website Content

Keep your AI agent automatically updated with your latest content. SiteSync ensures your AI always provides current, accurate information by continuously monitoring your website for changes.

## What Is SiteSync?

SiteSync is Supportium AI's intelligent content synchronization system that:

- **Automatically discovers** new pages and content on your website
- **Monitors changes** to existing pages and updates your AI's knowledge
- **Removes outdated content** when pages are deleted or moved
- **Maintains accuracy** by keeping your AI's responses current with your business

:::tip **Why SiteSync Matters**
Without SiteSync, your AI would only know about your website as it existed during initial setup. With SiteSync, your AI evolves with your business.
:::

---

## How SiteSync Works

### Automatic Content Discovery

**1. Initial Website Crawl**
- Maps your entire website structure
- Discovers all publicly accessible pages
- Indexes content from each page
- Creates a baseline knowledge base

**2. Ongoing Monitoring**
- Checks your website regularly for changes
- Identifies new pages and content additions
- Detects modifications to existing pages
- Removes content from deleted or moved pages

**3. Smart Content Processing**
- Extracts meaningful content while filtering out navigation and boilerplate
- Maintains context and relationships between pages
- Preserves formatting and structure for better understanding
- Optimizes content for AI question-answering

### Sync Frequency Options

| Sync Setting | Best For | How It Works |
|-------------|----------|--------------|
| **Real-time** | Frequently updated sites | Checks for changes every few minutes |
| **Daily** | Regular business updates | Syncs once per day at your chosen time |
| **Weekly** | Stable content sites | Weekly sync on your preferred day |
| **Manual** | Complete control | Sync only when you trigger it |

---

## Setting Up SiteSync

### Initial Configuration

**1. Add Your Website**
- Go to your Supportium AI dashboard
- Navigate to **Content** → **Website Sources**
- Click "Add Website" and enter your URL
- SiteSync will begin the initial crawl automatically

**2. Configure Sync Settings**
```
Website URL: https://yourwebsite.com
Sync Frequency: Daily (recommended)
Sync Time: 2:00 AM (your timezone)
Include Subdomains: Yes/No
Max Pages: 1000 (or custom limit)
```

**3. Set Content Filters** *(Optional)*
- Include specific page paths: `/help/`, `/support/`, `/docs/`
- Exclude certain areas: `/admin/`, `/internal/`, `/checkout/`
- Filter by content type: Blog posts, product pages, help articles

### Advanced Configuration

**Custom Crawl Rules:**
```
Include Patterns:
- /help/*
- /support/*  
- /faq/*
- /products/*

Exclude Patterns:
- /admin/*
- /checkout/*
- /login/*
- /*.pdf (if you don't want PDF content)
```

**Content Prioritization:**
- **High Priority**: FAQ pages, support documentation, product info
- **Medium Priority**: Blog posts, company information, general pages
- **Low Priority**: News, events, time-sensitive content

---

## Managing Your Content Sources

### Multiple Website Sources

**Adding Additional Sites:**
- Main website: `https://yourcompany.com`
- Help documentation: `https://help.yourcompany.com`  
- Knowledge base: `https://support.yourcompany.com`
- Blog: `https://blog.yourcompany.com`

**Benefits of Multiple Sources:**
- Comprehensive coverage of all your content
- Different sync schedules for different sites
- Separate content filtering rules
- Better organization and management

### Content Source Types

**1. Website Pages**
- All standard web pages on your domain
- Automatically extracts text content
- Preserves headings and structure
- Includes meta descriptions where relevant

**2. Knowledge Base Integration**
- Direct integration with popular platforms
- Zendesk, Freshdesk, Intercom knowledge bases
- Notion, Confluence, GitBook documentation
- Custom API integrations available

**3. File Uploads**
- PDF documents and manuals
- Word documents and guides  
- Text files and FAQs
- Spreadsheets with product information

**4. Manual Content Entry**
- Custom Q&A pairs for specific questions
- Override automatic content with manual answers
- Add context that might not exist on your website
- Create responses for edge cases

---

## Optimizing SiteSync Performance

### Best Practices for Website Structure

**✅ Improve Sync Speed:**
- Create and maintain an XML sitemap
- Use clear, descriptive page URLs
- Ensure fast page loading times
- Organize content with clear headings (H1, H2, H3)

**✅ Enhance Content Quality:**
- Write descriptive page titles and meta descriptions
- Use structured content with bullet points and lists
- Include comprehensive FAQ sections
- Keep important information in easily readable text

**✅ Maintain Consistency:**
- Use consistent terminology across pages
- Update contact information and business hours regularly
- Remove or redirect outdated pages
- Keep navigation and site structure logical

### Content Optimization Tips

**Make Your Content AI-Friendly:**

**1. Use Clear Headings**
```markdown
# Main Topic
## Subtopic  
### Specific Detail
```

**2. Structure Information Logically**
```markdown
**Question:** How do I return a product?
**Answer:** To return a product, follow these steps:
1. Log into your account
2. Go to "My Orders"
3. Click "Return Item"
...
```

**3. Include Context and Details**
- Don't assume readers know your business model
- Explain acronyms and technical terms
- Provide complete contact information
- Include relevant links and references

---

## Monitoring SiteSync Activity

### Sync Status Dashboard

**Real-time Information:**
- Last sync date and time
- Number of pages processed
- New pages discovered
- Changes detected
- Any sync errors or warnings

**Sync History:**
- Daily/weekly sync logs
- Content addition and removal tracking
- Performance metrics and processing times
- Error logs and resolution status

### Content Analytics

**Track Content Performance:**
- Which pages are referenced most in AI responses
- Content gaps where the AI can't provide answers
- Popular questions not covered by your content
- Suggestions for new content to add

**Optimization Insights:**
- Pages that could be improved for better AI responses
- Content that generates the most customer questions
- Areas where manual answers might be needed
- Performance impact of different content sources

---

## Troubleshooting SiteSync Issues

### Common Problems and Solutions

**🔧 Sync Not Working**

*Symptom:* Content hasn't updated despite website changes
*Solutions:*
- Verify your website is publicly accessible
- Check that pages load properly in a regular browser
- Ensure you haven't blocked crawlers in robots.txt
- Contact support if the issue persists

**🔧 Missing Content**

*Symptom:* Important pages aren't being synced
*Solutions:*
- Check your include/exclude filters
- Verify pages are linked from your main navigation
- Ensure pages don't require login to access
- Add pages to your XML sitemap

**🔧 Outdated Information**

*Symptom:* AI provides old information despite website updates
*Solutions:*
- Force a manual sync to update immediately
- Check if the changed content is in an excluded section
- Verify the page is still publicly accessible
- Review your sync frequency settings

**🔧 Sync Errors**

*Symptom:* Error messages in sync logs
*Solutions:*
- Check if your website was temporarily down
- Verify SSL certificate is valid and current
- Ensure website hosting is stable
- Review any recent website changes that might affect access

### Getting Help

**When to Contact Support:**
- Sync has been failing for more than 24 hours
- Critical content isn't appearing in AI responses
- You need help with complex content filtering
- Website changes require special sync configuration

:::warning **Content Privacy**
SiteSync only accesses publicly available content on your website. Content behind login walls, password protection, or marked as private will not be synced.
:::

---

## Advanced SiteSync Features

### Custom Integration Options

**API-Based Sync:**
- Direct integration with your CMS
- Real-time updates via webhooks
- Custom data transformation rules
- Bulk content import and export

**Enterprise Features:**
- Multiple domain management
- Custom sync scheduling
- Priority content processing
- Dedicated sync monitoring

### Content Validation

**Quality Checks:**
- Automatic detection of broken links
- Content freshness monitoring
- Duplicate content identification
- Language and formatting validation

**Compliance Features:**
- Content approval workflows
- Version control and change tracking
- Audit logs for compliance requirements
- Data retention and deletion policies

---

## Best Practices Summary

### ✅ Do This
- Keep your website content comprehensive and up-to-date
- Use clear, descriptive headings and well-structured content
- Regularly review and update your FAQ and help sections
- Monitor sync performance and address any issues quickly
- Set up appropriate sync frequency for your content update schedule

### ❌ Avoid This
- Don't put important customer information behind login walls
- Don't use images or videos as the only source of important information
- Don't frequently restructure your website without updating SiteSync settings
- Don't ignore sync errors or warnings in your dashboard
- Don't set sync frequency higher than your content update needs

---

## Next Steps

**Optimize Your Content Strategy:**

1. **[Review Content Performance](/features/insights)** - See which content helps customers most
2. **[Add Custom Answers](/features/improve-custom-answers)** - Fill gaps with specific responses  
3. **[Set Up Content Monitoring](/features/conversation-ratings-csat)** - Track accuracy and satisfaction
4. **[Connect Additional Sources](/features/connections)** - Integrate knowledge bases and other platforms

:::info **Need Help with SiteSync?**
Our team can help optimize your content synchronization:
- 💬 **Live Chat**: Get immediate assistance via the chat widget
- 📧 **Email**: Contact [support@supportium.ai](mailto:support@supportium.ai)
- 📋 **Content Audit**: Request a free review of your sync setup
:::

*Last updated: August 2025*
