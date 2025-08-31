---
id: chat-bubble-not-visible
title: Chat Bubble Not Visible
---

# Chat Bubble Not Visible

Can't see your AI chat widget on your website? This troubleshooting guide will help you identify and fix the most common causes.

## Quick Diagnostic Steps

**Before troubleshooting, verify:**
- ✅ Your AI agent setup is complete (you received a completion email)
- ✅ You've installed the widget code on your website
- ✅ You're checking your live website (not a preview or staging environment)

---

## Most Common Causes & Solutions

### 🔧 **1. Installation Code Issues**

**Symptom:** Widget never appears, even after clearing cache

**Check This:**
- Ensure you copied the complete installation code from your dashboard
- Verify the code is placed before the closing `</body>` tag
- Make sure there are no missing characters or extra spaces

**Solution:**
1. Go to your Supportium AI dashboard → **Settings** → **Installation**
2. Copy the code again (don't trust old copies)
3. Replace any existing code on your website with the fresh copy
4. Clear your browser cache and test

**Correct code placement:**
```html
<!-- Your website content -->
<script>
window.SupportiumAI = { agentId: 'your-agent-id' };
(function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(d.getElementById(id))return;
  js=d.createElement(s);js.id=id;
  js.src="https://widget.supportium.ai/embed.js";
  fjs.parentNode.insertBefore(js,fjs);
}(document,'script','supportium-widget'));
</script>
</body>
</html>
```

### 🔧 **2. Agent Not Fully Processed**

**Symptom:** Code is installed correctly but widget doesn't load

**Check This:**
- Log into your Supportium AI dashboard
- Look for agent status - it should show "Active" or "Live"
- Check for any error messages or processing notifications

**Solution:**
If your agent is still processing:
- Wait for the completion email (usually 30-60 minutes)
- Processing time depends on your website size
- You can work on other things while waiting

If processing failed:
- Check your email for error notifications
- Verify your website is publicly accessible
- Contact support if you see persistent errors

### 🔧 **3. JavaScript Conflicts**

**Symptom:** Widget loads intermittently or not on certain pages

**Check This:**
- Open browser console (F12) and look for JavaScript errors
- Try disabling other plugins/widgets temporarily
- Test on different pages of your website

**Solution:**
1. **Check Browser Console:**
   - Press F12 to open developer tools
   - Go to the "Console" tab
   - Refresh the page and look for red error messages
   - Screenshot any errors mentioning "supportium" or widget-related issues

2. **Test in Incognito Mode:**
   - Open your website in an incognito/private browser window
   - If the widget appears, you likely have a browser extension conflict

3. **Disable Other Scripts Temporarily:**
   - If using multiple chat widgets or popup tools, temporarily disable them
   - Test if the Supportium widget appears
   - Re-enable other scripts one by one to identify conflicts

### 🔧 **4. CSS Styling Issues**

**Symptom:** Widget loads but is hidden or positioned incorrectly

**Check This:**
- Widget appears in browser inspector but not visually
- Widget is positioned off-screen or behind other elements
- Z-index conflicts with other page elements

**Solution:**
1. **Inspect Element:**
   - Right-click where the widget should appear
   - Select "Inspect Element"
   - Look for elements with class names containing "supportium" or "widget"

2. **Override CSS Conflicts:**
```html
<script>
window.SupportiumAI = {
  agentId: 'your-agent-id',
  style: {
    zIndex: '9999',
    position: 'fixed',
    bottom: '20px',
    right: '20px'
  }
};
</script>
```

3. **Custom Positioning:**
```html
<script>
window.SupportiumAI = {
  agentId: 'your-agent-id',
  position: 'bottom-left',  // Options: bottom-right, bottom-left
  offsetX: 20,              // Distance from side
  offsetY: 20               // Distance from bottom
};
</script>
```

### 🔧 **5. Content Security Policy (CSP) Blocking**

**Symptom:** Console shows CSP violation errors

**Check This:**
- Browser console shows "Content Security Policy" errors
- Errors mention blocking scripts from "supportium.ai" domain

**Solution:**
Add these CSP directives to your existing policy (append to current directives, don't replace):
```
script-src 'self' https://widget.supportium.ai;
connect-src 'self' https://api.supportium.ai;
frame-src https://widget.supportium.ai;
img-src 'self' https://widget.supportium.ai data:;
```

For WordPress users:
- Some security plugins block external scripts
- Temporarily disable security plugins to test
- Add supportium.ai domains to your security plugin's allowlist

### 🔧 **6. Caching Issues**

**Symptom:** Widget appears in incognito mode but not in regular browsing

**Check This:**
- Widget works in incognito/private browsing mode
- Changes to installation code don't seem to take effect
- Website uses caching plugins or CDN

**Solution:**
1. **Clear Browser Cache:**
   - Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or manually clear cache in browser settings

2. **Clear Website Cache:**
   - **WordPress**: Clear cache in caching plugins (WP Rocket, W3 Total Cache, etc.)
   - **Cloudflare**: Go to Cloudflare dashboard → Caching → Purge Everything
   - **Other CDNs**: Check your CDN provider's cache clearing options

3. **Wait for Propagation:**
   - CDN changes can take 15-30 minutes to propagate globally
   - Test from different devices/networks

---

## Platform-Specific Troubleshooting

### WordPress Issues

**Common Problems:**
- Theme conflicts with widget positioning
- Plugin conflicts (especially other chat widgets)
- Caching plugins preventing widget from loading

**Solutions:**
1. **Switch to Default Theme Temporarily:**
   - Activate Twenty Twenty-Three or another default theme
   - Test if widget appears
   - If yes, your theme has a conflict

2. **Plugin Conflict Test:**
   - Deactivate all plugins except essential ones
   - Test widget functionality
   - Reactivate plugins one by one to identify the culprit

3. **Use Header/Footer Plugin:**
   - Install "Insert Headers and Footers" plugin
   - Add Supportium code in the footer section
   - This bypasses theme file editing

### Shopify Issues

**Common Problems:**
- Theme updates overwriting custom code
- Liquid template syntax errors
- App conflicts

**Solutions:**
1. **Check Theme Customizations:**
   - Go to Online Store → Themes → Actions → Edit Code
   - Verify code is still in theme.liquid file
   - Re-add if missing after theme updates

2. **Use Theme Customizer:**
   - Some themes have built-in areas for custom scripts
   - Look in Theme Customizer for "Custom Code" sections

### Other Platform Issues

**Squarespace:**
- Ensure code is in "Code Injection" → Footer, not Header
- Check if template blocks custom JavaScript

**Wix:**
- Verify tracking tool is set to "All Pages"
- Try using HTML element instead of tracking tools

**Webflow:**
- Ensure code is in Project Settings → Custom Code → Footer
- Check if interactions are interfering

---

## Advanced Diagnostics

### Browser Console Testing

**Step 1: Check if Script Loads**
```javascript
// In browser console, check if window object exists
console.log(window.SupportiumAI);
// Should show your configuration object
```

**Step 2: Check Network Requests**
1. Open browser developer tools (F12)
2. Go to "Network" tab
3. Refresh the page
4. Look for requests to "widget.supportium.ai"
5. Check if request succeeds (status 200) or fails

**Step 3: Manual Widget Loading**
```javascript
// Try loading widget manually in console
var script = document.createElement('script');
script.src = 'https://widget.supportium.ai/embed.js';
document.head.appendChild(script);
```

### Network and Firewall Issues

**Corporate Networks:**
- Some corporate firewalls block external widgets
- Test from personal device/network to confirm
- Contact IT department to whitelist supportium.ai domains

**Ad Blockers:**
- Browser extensions may block chat widgets
- Test in incognito mode with extensions disabled
- Some ad blockers specifically target chat widgets

---

## Still Not Working?

### Before Contacting Support

**Gather This Information:**
- [ ] Website URL where widget should appear
- [ ] Browser and version you're testing with
- [ ] Any error messages from browser console (screenshots helpful)
- [ ] Whether widget works in incognito mode
- [ ] Your agent ID from the Supportium dashboard

**Quick Tests to Try:**
- [ ] Test on different pages of your website
- [ ] Test with different browsers (Chrome, Firefox, Safari)
- [ ] Test from different devices (desktop, mobile)
- [ ] Check if widget appears for other users

### Get Help

**For Immediate Assistance:**
- 💬 **Live Chat**: Use the widget on this page (if you can see it!)
- 📧 **Email**: [support@supportium.ai](mailto:support@supportium.ai)
- 📱 **Phone**: Available for Pro and Enterprise customers

**Include in Your Support Request:**
1. Your website URL
2. Screenshots of browser console errors
3. Description of when the issue started
4. What troubleshooting steps you've already tried
5. Your Supportium AI agent ID

**Response Times:**
- Live chat: Immediate during business hours
- Email: Within 4 hours during business days
- Phone: Immediate for priority customers

---

## Prevention Tips

### Avoid Future Issues

**✅ Best Practices:**
- Always copy installation code fresh from your dashboard
- Test widget after any website changes or updates
- Keep a backup of your working installation code
- Monitor browser console for new errors after updates

**✅ Regular Maintenance:**
- Check widget functionality monthly
- Clear caches after website updates
- Update themes and plugins carefully
- Test on different browsers and devices periodically

**✅ Documentation:**
- Document any custom CSS or positioning changes
- Note any special configurations for future reference
- Keep track of which team member has access to widget settings

:::tip **Pro Tip**
Bookmark your Supportium AI dashboard installation page. This makes it easy to quickly copy fresh code if issues arise after website updates.
:::

---

## Related Troubleshooting

**Other Common Issues:**
- **[Slow Response Times](/troubleshooting/slow-responses)** - Widget loads but AI responds slowly
- **[AI Can't Answer Questions](/troubleshooting/why-cant-it-answer)** - Widget works but provides poor responses
- **[Website Not Syncing](/troubleshooting/website-not-added)** - Content synchronization problems

**Setup Guides:**
- **[WordPress Installation](/start-here/add-your-ai-agent-to-your-website/wordpress)** - Detailed WordPress setup
- **[Shopify Installation](/start-here/add-your-ai-agent-to-your-website/shopify)** - Shopify-specific instructions

*Last updated: August 2025*
