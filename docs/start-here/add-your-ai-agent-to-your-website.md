---
id: add-your-ai-agent-to-your-website
title: Add Your AI Agent To Your Website
---

# Add Your AI Agent to Your Website

Deploy your AI support agent to start helping customers immediately. This guide covers installation methods for all major platforms and website types.

## What You'll Accomplish

By the end of this guide, you'll have:
- ✅ Your AI chat widget installed and working
- ✅ Customized appearance matching your brand
- ✅ Proper positioning and behavior settings  
- ✅ Testing completed before customers see it

**⏱️ Time Required**: 5-10 minutes

---

## Before You Begin

### Prerequisites

✅ **AI Agent Setup Complete**: Your agent should be fully processed and ready  
✅ **Website Access**: You need admin access to your website  
✅ **Installation Code**: Available in your Supportium AI dashboard

### Get Your Installation Code

1. **Log into your Supportium AI Dashboard**
   - Visit [app.supportium.ai](https://app.supportium.ai)
   - Navigate to "Settings" → "Installation"

2. **Copy Your Widget Code**
   - You'll see a JavaScript code snippet
   - This is unique to your account - keep it secure
   - The code looks like this:

```html
<script>
  window.SupportiumAI = { agentId: 'your-unique-id' };
  (function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(d.getElementById(id))return;
    js=d.createElement(s);js.id=id;
    js.src="https://widget.supportium.ai/embed.js";
    fjs.parentNode.insertBefore(js,fjs);
  }(document,'script','supportium-widget'));
</script>
```

---

## Installation Methods

### Option 1: Universal HTML Installation (Recommended)

**Best for**: Any website where you can edit HTML

1. **Locate Your Site's HTML**
   - Find where you can edit your website's HTML code
   - Look for the `<head>` section or before the closing `</body>` tag

2. **Add the Code**
   - Paste your installation code just before `</body>` (preferred)
   - Or in the `<head>` section if that's easier

3. **Save and Publish**
   - Save your changes
   - Publish or deploy your website updates

:::tip **Best Practice**
Install the code just before the closing `</body>` tag for optimal loading performance.
:::

### Option 2: WordPress Installation

**For WordPress users** - [See detailed WordPress guide](/start-here/add-your-ai-agent-to-your-website-wordpress)

**Quick steps:**
1. Go to **Appearance** → **Theme Editor** (or use a plugin)
2. Add the code to your theme's `footer.php` file
3. Or use a "Header/Footer Scripts" plugin for easier management

### Option 3: Shopify Installation  

**For Shopify stores** - [See detailed Shopify guide](/start-here/add-your-ai-agent-to-your-website-shopify)

**Quick steps:**
1. Go to **Online Store** → **Themes** → **Actions** → **Edit Code**
2. Open `theme.liquid` file
3. Add the code before `</body>` tag

### Option 4: Other Platforms

#### **Squarespace**
1. Go to **Settings** → **Advanced** → **Code Injection**
2. Add the code in the "Footer" section
3. Save your changes

#### **Wix**  
1. Go to **Settings** → **Tracking & Analytics**
2. Click "+ New Tool" → **Custom**
3. Add the code and set it to "All Pages"

#### **Webflow**
1. Go to **Project Settings** → **Custom Code**
2. Add the code in "Footer Code"
3. Publish your site

#### **Ghost**
1. Go to **Settings** → **Code Injection**
2. Add the code in "Site Footer"
3. Save changes

---

## Customization Options

### Widget Positioning

**Default Position**: Bottom right corner

**Custom Positioning:**
```html
<script>
window.SupportiumAI = {
  agentId: 'your-unique-id',
  position: 'bottom-left',  // Options: bottom-right, bottom-left
  offsetX: 20,              // Distance from edge (pixels)
  offsetY: 20               // Distance from bottom (pixels)
};
</script>
```

### Widget Appearance

**Custom Styling:**
```html
<script>
window.SupportiumAI = {
  agentId: 'your-unique-id',
  theme: {
    primaryColor: '#007bff',      // Your brand color
    textColor: '#333333',         // Text color
    backgroundColor: '#ffffff',   // Background color
    borderRadius: '8px'          // Corner rounding
  }
};
</script>
```

### Behavior Settings

**Advanced Configuration:**
```html
<script>
window.SupportiumAI = {
  agentId: 'your-unique-id',
  autoOpen: false,              // Don't open automatically
  welcomeMessage: 'Hi there!',  // Custom greeting
  showOnMobile: true,           // Display on mobile devices
  hideOnPages: ['/admin/', '/checkout/']  // Hide on specific pages
};
</script>
```

---

## Testing Your Installation

### Verify Installation

1. **Visit Your Website**
   - Go to your live website (not preview/staging)
   - Look for the chat widget (usually bottom-right corner)

2. **Test the Chat**
   - Click the chat widget to open it
   - Send a test message like "What are your business hours?"
   - Verify your AI agent responds correctly

3. **Check Responsiveness**
   - Test on different devices (desktop, tablet, mobile)
   - Ensure the widget displays properly on all screen sizes

### Troubleshooting Installation Issues

**Widget Not Appearing?**
- Check browser console for JavaScript errors
- Verify the installation code is correct and complete
- Ensure your agent processing is complete
- Try refreshing your browser cache

**Widget Appears But Doesn't Work?**
- Confirm your agent ID in the code matches your dashboard
- Check that your agent status is "Active" in the dashboard
- Verify your website allows third-party scripts

**Styling Issues?**
- Check for CSS conflicts with your website theme
- Try adjusting the positioning or sizing options
- Contact support for custom styling assistance

:::warning **Cache Issues**
If you don't see changes immediately, try:
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Clear your browser cache
- Check if your website uses caching plugins that need clearing
:::

---

## Advanced Features

### Page-Specific Settings

**Show on Specific Pages Only:**
```html
<script>
window.SupportiumAI = {
  agentId: 'your-unique-id',
  showOnPages: ['/support/', '/contact/', '/pricing/']
};
</script>
```

**Hide on Specific Pages:**
```html
<script>
window.SupportiumAI = {
  agentId: 'your-unique-id',
  hideOnPages: ['/admin/', '/login/', '/checkout/']
};
</script>
```

### User Context Passing

**Pass User Information:**
```html
<script>
window.SupportiumAI = {
  agentId: 'your-unique-id',
  userData: {
    userId: 'customer123',
    email: 'user@example.com',
    plan: 'premium'
  }
};
</script>
```

### Events and Callbacks

**Track Interactions:**
```html
<script>
window.SupportiumAI = {
  agentId: 'your-unique-id',
  onWidgetLoad: function() {
    console.log('Widget loaded');
  },
  onChatStart: function() {
    console.log('Chat started');
    // Track with your analytics
  }
};
</script>
```

---

## Going Live Checklist

Before making your AI agent public:

### Pre-Launch Testing
- [ ] Widget appears correctly on all devices
- [ ] AI responds accurately to common questions  
- [ ] Styling matches your brand
- [ ] All links and features work properly
- [ ] Load times are acceptable

### Content Review
- [ ] Test with your most common customer questions
- [ ] Verify responses are accurate and helpful
- [ ] Check that handover to human agents works
- [ ] Ensure error messages are user-friendly

### Team Preparation
- [ ] Train your human support team on the AI handover process
- [ ] Set up monitoring and alerts for AI performance
- [ ] Prepare for potential increase in support volume

---

## Next Steps

🎉 **Congratulations!** Your AI support agent is now live on your website.

### Immediate Actions
1. **[Monitor Performance](/features/insights)** - Track how your AI is helping customers
2. **[Set Up Human Handover](/features/human-handover)** - Ensure smooth escalations
3. **[Customize Responses](/features/improve-custom-answers)** - Fine-tune specific answers

### Ongoing Optimization
- Review conversation logs weekly
- Update your website content to improve AI accuracy
- Add custom answers for frequently asked questions
- Monitor customer satisfaction scores

### Platform-Specific Guides
- **[WordPress Detailed Setup](/start-here/add-your-ai-agent-to-your-website-wordpress)**
- **[Shopify Integration](/start-here/add-your-ai-agent-to-your-website-shopify)**  
- **[Zendesk Integration](/start-here/add-your-ai-agent-to-your-website-zendesk)**

:::info **Need Help?**
Having installation issues? Our team is here to help:
- 💬 **Live Chat**: Use the widget on this page
- 📧 **Email**: [support@supportium.ai](mailto:support@supportium.ai)
- 🎥 **Video Tutorials**: [Watch step-by-step guides](/start-here/video-tutorials)
:::

*Last updated: August 2025*
