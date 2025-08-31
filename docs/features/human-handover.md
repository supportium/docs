---
id: human-handover
title: Human Handover
---

# Human Handover

Seamlessly connect customers with your human support team when AI reaches its limits. Human Handover ensures complex queries get the personal attention they need while maintaining conversation context.

## What Is Human Handover?

Human Handover automatically detects when customers need human assistance and smoothly transfers them to your support team. This ensures customers always get the right level of help while maximizing your AI's efficiency.

### Key Benefits

- **Seamless Experience**: Customers don't need to repeat their questions or context
- **Smart Detection**: AI recognizes when human help is needed and proactively offers transfer
- **Full Context Sharing**: Complete conversation history is passed to your team
- **No Additional Software**: Works with your existing live chat and help desk tools
- **Flexible Rules**: Customize when and how handovers occur

---

## How Human Handover Works

### 1. **Automatic Detection**

Your AI agent identifies handover scenarios:
- Complex technical issues beyond its knowledge
- Customer expressing frustration or dissatisfaction
- Requests for human interaction ("I want to speak to a person")
- Sensitive topics like billing disputes or account issues
- Multi-step processes requiring human judgment

### 2. **Proactive Offering**

The AI offers human assistance:
```
"I understand this is a complex situation. Would you like me to connect you with one of our human support specialists who can provide more personalized help?"
```

### 3. **Context Transfer**

When customer accepts:
- Full conversation history is preserved
- Customer information and context is shared
- Priority level is set based on the inquiry type
- Your team receives a comprehensive handoff

### 4. **Seamless Connection**

Customer is connected through:
- Your existing live chat system
- Email with full context included  
- Support ticket creation with conversation attached
- Phone callback request with background information

### Privacy and Data Protection

**⚠️ Important:** Full context must be redacted by default to protect customer privacy.

**Sensitive Data to Remove:**
- Email addresses and phone numbers
- Social Security Numbers (SSNs)  
- API keys and authentication tokens
- Payment information (card numbers, bank details)
- Health/medical data
- Personal identifiers

**Redaction-First Policy:**
- Implement automated redaction for common PII patterns
- Use explicit opt-in mechanism for including unredacted fields
- Require human review for any opt-in decisions

**Handover Template:**
```
☐ Include customer email (reason: _________)
☐ Include phone number (reason: _________)  
☐ Include order details (reason: _________)
☐ Include conversation transcript (reason: _________)

Selected fields have been reviewed and are necessary for: [specific business purpose]
```

---

## Setting Up Human Handover

### Basic Configuration

**1. Choose Your Handover Method**

**Live Chat Integration:**
- Connect to Intercom, Zendesk Chat, Freshchat, or other platforms
- Customers transfer directly into your existing chat queue
- Agents see full AI conversation context

**Email Handover:**
- AI creates detailed email with conversation history
- Sent to your support team email address
- Customer receives confirmation and expected response time

**Ticket Creation:**
- Automatically creates tickets in Zendesk, Freshdesk, etc.
- Includes conversation transcript and customer context
- Sets appropriate priority and categorization

**2. Configure Trigger Rules**

```javascript
// Example configuration
{
  "handover_triggers": {
    "keywords": ["human", "person", "agent", "representative"],
    "sentiment_threshold": -0.3,
    "confidence_threshold": 0.6,
    "unanswered_questions": 2,
    "conversation_length": 10
  },
  "handover_settings": {
    "method": "live_chat",
    "target": "intercom",
    "business_hours_only": false,
    "priority_mapping": {
      "billing": "high",
      "technical": "medium", 
      "general": "low"
    }
  }
}
```

### Platform Integrations

#### **Intercom Integration**
1. Go to **Settings** → **Integrations** → **Intercom**
2. Connect your Intercom account with OAuth
3. Configure conversation routing rules
4. Test handover with a sample conversation

**Features:**
- Real-time transfer to live agents
- Customer context preserved in Intercom
- AI conversation appears as chat history
- Supports custom user attributes

#### **Zendesk Integration**
1. Install the Supportium AI app from Zendesk Marketplace
2. Configure API credentials in your Supportium dashboard
3. Set up ticket creation rules and priority mapping
4. Customize email templates for handover notifications

**Features:**
- Automatic ticket creation with conversation transcripts
- Smart priority assignment based on conversation content
- Integration with Zendesk Chat for live handovers
- Custom fields populated with AI insights

#### **Freshworks Integration**
- **Freshchat**: Live chat handover with conversation context
- **Freshdesk**: Ticket creation with full conversation history
- **Freshsales**: Lead creation from qualifying conversations

#### **Slack Integration**
1. Connect your Slack workspace
2. Create dedicated channels for different handover types
3. Configure notification rules for your team
4. Use slash commands to manage handover queues

**Example Slack handover:**
```
🤖 New handover from AI Assistant
Customer: john.doe@example.com
Topic: Billing question about invoice #12345
Conversation: [Full transcript attached]
Priority: High
Assigned: @support-team
```

---

## Customizing Handover Experience

### Smart Handover Rules

**Keyword Triggers:**
```javascript
{
  "immediate_handover": [
    "speak to manager",
    "file a complaint", 
    "cancel my account",
    "billing dispute"
  ],
  "offer_handover": [
    "this isn't working",
    "I'm frustrated",
    "need more help",
    "talk to human"
  ]
}
```

**Sentiment-Based Handover:**
- Detect negative sentiment in customer messages
- Offer human assistance when frustration is detected
- Escalate automatically for very negative interactions

**Context-Aware Triggers:**
- High-value customers get priority handover options
- Complex product questions trigger technical specialist routing
- Billing inquiries route to billing team

### Custom Handover Messages

**Offering Handover:**
```
"I can see this is important to you. Would you like me to connect you with one of our specialists who can give this their full attention?"
```

**During Handover:**
```
"I'm connecting you with [Agent Name] now. They'll have access to our entire conversation, so you won't need to repeat anything. Please hold for just a moment."
```

**After Hours:**
```
"Our human support team is currently offline. I can either help you further, or connect you with the next available agent when they return at 9 AM EST. What would you prefer?"
```

### Business Hours Configuration

**Standard Hours:**
```javascript
{
  "business_hours": {
    "timezone": "America/New_York",
    "schedule": {
      "monday": {"start": "09:00", "end": "18:00"},
      "tuesday": {"start": "09:00", "end": "18:00"},
      "wednesday": {"start": "09:00", "end": "18:00"},
      "thursday": {"start": "09:00", "end": "18:00"}, 
      "friday": {"start": "09:00", "end": "18:00"},
      "saturday": "closed",
      "sunday": "closed"
    }
  }
}
```

**After-Hours Options:**
- Queue for next business day with expected response time
- Emergency contact options for urgent issues  
- Extended AI assistance with more comprehensive responses
- Callback scheduling for complex issues

---

## Advanced Handover Features

### Intelligent Routing

**Skill-Based Routing:**
- Technical questions → Technical support team
- Billing inquiries → Billing specialists  
- Sales questions → Sales team
- General inquiries → General support

**Priority Assignment:**
```javascript
{
  "priority_rules": {
    "enterprise_customers": "high",
    "billing_disputes": "high",
    "technical_outages": "urgent",
    "general_questions": "normal",
    "feature_requests": "low"
  }
}
```

**Queue Management:**
- Estimated wait times shared with customers
- Position in queue updates
- Option to receive callback instead of waiting
- Queue overflow routing to alternative channels

### Context Enrichment

**Customer Data Integration:**
- Account history and subscription details
- Previous conversation history
- Purchase history and preferences
- Support ticket history and resolution patterns

**Conversation Analysis:**
- Automatic categorization of inquiry type
- Sentiment analysis and escalation flags
- Key topics and entities extracted from conversation
- Suggested response templates for agents

**Performance Insights:**
- Handover rate tracking by topic and time
- Customer satisfaction scores post-handover
- Average resolution time after handover
- Agent performance metrics

---

## Monitoring and Optimization

### Handover Analytics

**Key Metrics Dashboard:**
- Total handovers per day/week/month
- Handover rate percentage (handovers vs. total conversations)
- Average time to handover
- Customer satisfaction after handover
- Most common handover triggers

**Performance Tracking:**
```
Handover Rate: 12% (Target: <15%)
Average Response Time: 3.2 minutes (Target: <5 min)
Customer Satisfaction: 4.6/5 (Target: >4.0)
Resolution Rate: 87% first contact (Target: >80%)
```

### Quality Assurance

**Review Process:**
1. **Daily Handover Review**: Check previous day's handovers for accuracy
2. **Weekly Trend Analysis**: Identify patterns in handover triggers
3. **Monthly Optimization**: Adjust rules based on performance data
4. **Quarterly Strategy Review**: Assess overall handover strategy effectiveness

**Improvement Actions:**
- Update AI knowledge base to handle common handover triggers
- Refine handover rules to reduce unnecessary escalations
- Train AI on better handover messaging and timing
- Improve agent briefing materials with AI insights

---

## Team Training and Best Practices

### Agent Preparation

**Handover Briefing:**
- Review AI conversation context before engaging customer
- Understand what solutions were already attempted
- Note customer sentiment and communication style
- Check priority level and urgency indicators

**Response Templates:**
```
"Hi [Customer Name], I'm [Agent Name] and I've reviewed your conversation with our AI assistant. I can see you're having trouble with [Issue]. Let me help you get this resolved right away."
```

### Best Practices

**✅ Do This:**
- Acknowledge the AI conversation context immediately
- Thank customer for their patience during handover
- Quickly summarize understanding to confirm accuracy
- Take ownership of the issue and next steps
- Follow up to ensure satisfaction

**❌ Avoid This:**
- Making customer repeat information already shared with AI
- Dismissing or contradicting AI responses unnecessarily
- Leaving customer unclear about what happens next
- Taking too long to engage after handover
- Failing to document resolution for AI learning

### Continuous Improvement

**Feedback Loop:**
- Agents flag cases where AI should have handled the inquiry
- Document successful AI handover cases for training data
- Share insights about common customer needs with AI training
- Regular team meetings to discuss handover optimization

---

## Troubleshooting Handover Issues

### Common Problems

**🔧 Handovers Not Working**
- Check integration settings and API credentials
- Verify business hours configuration
- Test with sample handover scenarios
- Review error logs in dashboard

**🔧 Too Many Handovers**
- Adjust sensitivity of handover triggers
- Review and expand AI knowledge base
- Analyze common handover reasons
- Fine-tune confidence thresholds

**🔧 Context Not Transferring**
- Verify integration permissions and scopes
- Check conversation data formatting
- Test with different handover methods
- Contact support for integration troubleshooting

**🔧 Customers Confused by Handover**
- Improve handover messaging clarity
- Set better expectations about wait times
- Provide clear instructions for next steps
- Add confirmation messages

---

## Integration Examples

### Custom API Handover

For custom integrations, use our handover API:

```javascript
// Trigger handover programmatically
const handoverResponse = await fetch('/api/v1/handover', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    conversation_id: 'conv_123',
    handover_reason: 'complex_technical_issue',
    priority: 'high',
    target_team: 'technical_support',
    customer_context: {
      user_id: 'user_456',
      account_type: 'enterprise',
      subscription: 'premium'
    }
  })
});
```

### Webhook Integration

Receive handover events in your systems:

```javascript
// Webhook payload example
{
  "event": "handover.initiated",
  "conversation_id": "conv_123",
  "customer": {
    "email": "customer@example.com",
    "name": "John Doe",
    "user_id": "user_456"
  },
  "handover_data": {
    "reason": "billing_dispute",
    "priority": "high",
    "transcript": "...",
    "ai_summary": "Customer has billing question about double charge",
    "suggested_actions": ["refund_review", "account_audit"]
  }
}
```

### Webhook Signature Verification

For security, all webhooks must be verified using HMAC SHA-256:

**Required Headers:**
- `X-Supportium-Timestamp`: Request timestamp
- `X-Supportium-Signature`: HMAC signature

**Verification Steps:**
1. Parse timestamp and reject requests outside 5-minute window
2. Create signed payload: `<timestamp>.<rawRequestBody>`  
3. Compute HMAC SHA-256 using your webhook secret
4. Compare computed signature using constant-time comparison (e.g., `crypto.timingSafeEqual`)
5. Reject requests with missing headers or verification failures
6. Log verification failures without exposing secrets

```javascript
// Example verification (Node.js)
const crypto = require('crypto');

function verifyWebhook(signature, timestamp, body, secret) {
  const now = Math.floor(Date.now() / 1000);
  const timestampInt = parseInt(timestamp);
  
  // Reject old requests (5 minute window)
  if (Math.abs(now - timestampInt) > 300) {
    return false;
  }
  
  // Create signed payload
  const signedPayload = `${timestamp}.${body}`;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(signedPayload)
    .digest('hex');
  
  // Constant-time comparison
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(`sha256=${expectedSignature}`)
  );
}
```

---

## Success Stories and Use Cases

### E-commerce Support
- **Challenge**: High volume of order inquiries during peak season
- **Solution**: AI handles 80% of order status questions, hands over complex cases
- **Result**: 60% reduction in human agent workload, improved response times

### SaaS Technical Support
- **Challenge**: Complex technical questions requiring specialized knowledge  
- **Solution**: Smart routing to technical specialists with full context
- **Result**: 40% faster resolution times, higher customer satisfaction

### Financial Services
- **Challenge**: Sensitive financial discussions requiring human oversight
- **Solution**: Automatic handover for account issues, regulatory compliance
- **Result**: Maintained compliance while improving efficiency

---

## Next Steps

**Optimize Your Handover Strategy:**

1. **[Set Up Integrations](/features/channels)** - Connect your existing tools
2. **[Monitor Performance](/features/insights)** - Track handover metrics and optimize
3. **[Train Your Team](/features/team-access)** - Prepare agents for AI-assisted workflows
4. **[Advanced Automation](/features/user-data-api-and-api-actions)** - Build custom handover workflows

:::tip **Start Simple**
Begin with basic keyword-triggered handovers and gradually add more sophisticated rules as you learn what works best for your customers and team.
:::

:::info **Need Help with Setup?**
Our team can help you configure handover rules and integrations:
- 💬 **Live Chat**: Get immediate setup assistance
- 📧 **Email**: [support@supportium.ai](mailto:support@supportium.ai)
- 📞 **Phone**: Priority setup support for Enterprise customers
:::

*Last updated: August 2025*
