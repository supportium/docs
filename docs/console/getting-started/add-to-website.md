---
sidebar_position: 4
---

# Add Supportium to Your Website

Integrate the Supportium chat widget into your website with just a few lines of code.

## Installation Methods

### Option 1: Bundle

Add this code just before the closing `</body>` tag of your website:

```html
<script src="https://cdn.supportium.ai/widget.js"></script>
```


### Option 2: JavaScript Snippet (Recommended)

Add this code just before the closing `</body>` tag of your website:

```html
<script>
  window.supportiumSettings = {
    apiKey: 'YOUR_API_KEY',
    position: 'right', // or 'left'
    primaryColor: '#2563eb',
    greeting: 'How can I help you today?'
  };
  (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://cdn.supportium.ai/widget.js';
    s.async = true;
    d.getElementsByTagName('head')[0].appendChild(s);
  })();
</script>
```


## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| apiKey | string | - | Your Supportium API key (required) |
| position | string | 'right' | Widget position ('left' or 'right') |
| primaryColor | string | '#2563eb' | Primary brand color |
| greeting | string | 'Hello! How can I help?' | Initial greeting message |
| hideWhenOffline | boolean | false | Hide widget when no agents are available |

## Testing Your Integration

1. Load your website
2. Verify the chat icon appears in the corner
3. Test sending a message
4. Check that responses are received

## Troubleshooting

- **Widget not appearing**: Check browser console for errors
- **API key issues**: Verify your API key in the Supportium Console
- **Styling conflicts**: Add `!important` to CSS overrides if needed

## Next Steps

- For more customization options, see our [features overview](../../console/features/overview) documentation.
- [Learn about advanced features](../../console/features/overview)
- [Set up handover to human agents](../../console/features/handover)
