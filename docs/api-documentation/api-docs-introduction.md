---
id: api-docs-introduction
title: API Documentation Introduction
---

# API Documentation

Integrate Supportium AI's powerful customer support capabilities directly into your applications, workflows, and existing systems. Our REST API provides programmatic access to all core features.

## What You Can Build

### 🔗 **System Integrations**
- Connect your AI agent to CRM systems (Salesforce, HubSpot)
- Integrate with help desk platforms (Zendesk, Freshdesk)
- Build custom dashboards and reporting tools
- Create automated workflows with your existing tools

### 💬 **Custom Chat Experiences**
- Embed AI-powered support into mobile applications
- Create custom chat widgets with your unique design
- Build voice-enabled support systems
- Integrate with messaging platforms (WhatsApp, SMS)

### 📊 **Data and Analytics**
- Extract conversation data for analysis
- Build custom reporting and performance metrics
- Integrate with business intelligence tools
- Create automated alerts and monitoring systems

### 🤖 **Advanced Automation**
- Create intelligent routing and escalation rules
- Build custom actions and integrations
- Automate follow-up communications
- Connect to external databases and services

---

## API Overview

### Base URL
```
https://api.supportium.ai/v1
```

### Authentication
All API requests require authentication using your API key in the header:
```http
Authorization: Bearer your_api_key_here
```

### Rate Limits
- **Free Plan**: 100 requests per hour
- **Pro Plan**: 1,000 requests per hour  
- **Enterprise Plan**: Custom limits available

### Response Format
All API responses are returned in JSON format:
```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "meta": {
    "timestamp": "2025-08-31T10:00:00Z",
    "request_id": "req_abc123"
  }
}
```

---

## Quick Start Guide

### Step 1: Get Your API Key

1. **Log into your Supportium AI Dashboard**
   - Visit [app.supportium.ai](https://app.supportium.ai)
   - Go to **Settings** → **API Keys**

2. **Create a New API Key**
   - Click "Generate New Key"
   - Choose appropriate permissions
   - Copy and securely store your key

:::warning **API Key Security**
Never expose your API key in client-side code or public repositories. Store it securely as an environment variable.
:::

### Step 2: Make Your First API Call

**Test Connection:**
```bash
curl -X GET "https://api.supportium.ai/v1/agent/status" \
  -H "Authorization: Bearer your_api_key_here" \
  -H "Content-Type: application/json"
```

**Expected Response:**
```json
{
  "success": true,
  "data": {
    "agent_id": "agent_abc123",
    "status": "active",
    "name": "Your AI Agent",
    "last_updated": "2025-08-31T09:30:00Z"
  }
}
```

### Step 3: Send a Chat Message

**Start a Conversation:**
```bash
curl -X POST "https://api.supportium.ai/v1/chat" \
  -H "Authorization: Bearer your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What are your business hours?",
    "user_id": "user_123",
    "session_id": "session_456"
  }'
```

**Response:**
```json
{
  "success": true,
  "data": {
    "response": "Our business hours are Monday-Friday 9am-6pm EST. We're closed on weekends and major holidays.",
    "confidence": 0.95,
    "sources": ["https://yoursite.com/contact"],
    "session_id": "session_456",
    "message_id": "msg_789"
  }
}
```

---

## API Endpoints

### 🤖 **Agent Management**
- `GET /agent/status` - Get agent status and information
- `PUT /agent/settings` - Update agent configuration
- `GET /agent/analytics` - Retrieve performance metrics

### 💬 **Chat & Conversations** 
- `POST /chat` - Send a message and get AI response
- `GET /conversations` - List recent conversations
- `GET /conversations/{id}` - Get specific conversation details
- `POST /conversations/{id}/handover` - Transfer to human agent

### 📚 **Content Management**
- `GET /content/sources` - List all content sources
- `POST /content/sync` - Trigger content synchronization
- `POST /content/custom-answers` - Add custom Q&A pairs
- `DELETE /content/custom-answers/{id}` - Remove custom answers

### 👥 **User Data**
- `POST /users` - Create or update user profiles
- `GET /users/{id}` - Retrieve user information
- `POST /users/{id}/context` - Add user context for personalization

### 📊 **Analytics & Reporting**
- `GET /analytics/conversations` - Conversation metrics
- `GET /analytics/performance` - AI performance statistics  
- `GET /analytics/satisfaction` - Customer satisfaction scores
- `GET /analytics/usage` - API usage statistics

---

## Code Examples

### JavaScript/Node.js

**Basic Chat Integration:**
```javascript
const axios = require('axios');

const supportiumAPI = axios.create({
  baseURL: 'https://api.supportium.ai/v1',
  headers: {
    'Authorization': `Bearer ${process.env.SUPPORTIUM_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

async function sendMessage(message, userId, sessionId) {
  try {
    const response = await supportiumAPI.post('/chat', {
      message: message,
      user_id: userId,
      session_id: sessionId
    });
    
    return response.data.data.response;
  } catch (error) {
    console.error('API Error:', error.response.data);
    return 'Sorry, I encountered an error. Please try again.';
  }
}

// Usage
const response = await sendMessage(
  'How do I reset my password?', 
  'user123', 
  'session456'
);
console.log(response);
```

### Python

**Chat Bot with Custom Context:**
```python
import requests
import os

class SupportiumAPI:
    def __init__(self):
        self.api_key = os.getenv('SUPPORTIUM_API_KEY')
        self.base_url = 'https://api.supportium.ai/v1'
        self.headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }
    
    def send_message(self, message, user_id=None, context=None):
        payload = {
            'message': message,
            'user_id': user_id,
            'context': context or {}
        }
        
        response = requests.post(
            f'{self.base_url}/chat',
            json=payload,
            headers=self.headers
        )
        
        if response.status_code == 200:
            return response.json()['data']['response']
        else:
            return f"Error: {response.json().get('error', 'Unknown error')}"

# Usage
api = SupportiumAPI()
response = api.send_message(
    'What is your return policy?',
    user_id='customer_123',
    context={'plan': 'premium', 'purchase_date': '2025-01-15'}
)
print(response)
```

### PHP

**Simple Integration:**
```php
<?php

class SupportiumAPI {
    private $apiKey;
    private $baseUrl = 'https://api.supportium.ai/v1';
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }
    
    public function sendMessage($message, $userId = null, $sessionId = null) {
        $data = [
            'message' => $message,
            'user_id' => $userId,
            'session_id' => $sessionId
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->baseUrl . '/chat');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Bearer ' . $this->apiKey,
            'Content-Type: application/json'
        ]);
        
        $response = curl_exec($ch);
        curl_close($ch);
        
        $decoded = json_decode($response, true);
        return $decoded['data']['response'] ?? 'Error occurred';
    }
}

// Usage
$api = new SupportiumAPI($_ENV['SUPPORTIUM_API_KEY']);
$response = $api->sendMessage('How can I contact support?', 'user123');
echo $response;
?>
```

---

## Error Handling

### HTTP Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| `200` | Success | Request completed successfully |
| `400` | Bad Request | Invalid request parameters |
| `401` | Unauthorized | Invalid or missing API key |
| `403` | Forbidden | Insufficient permissions |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Server Error | Internal server error |

### Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The message field is required",
    "details": {
      "field": "message",
      "expected": "non-empty string"
    }
  },
  "meta": {
    "timestamp": "2025-08-31T10:00:00Z",
    "request_id": "req_error123"
  }
}
```

### Best Practices for Error Handling

**1. Always Check Status Codes:**
```javascript
if (response.status >= 400) {
  console.error('API Error:', response.data.error);
  // Handle error appropriately
}
```

**2. Implement Retry Logic:**
```javascript
async function apiWithRetry(apiCall, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await apiCall();
    } catch (error) {
      if (error.response?.status === 429) {
        // Rate limited, wait and retry
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        continue;
      }
      throw error;
    }
  }
}
```

**3. Graceful Degradation:**
```javascript
function handleAPIError(error) {
  const fallbackResponse = "I'm sorry, I'm having trouble right now. Please contact our support team directly.";
  
  if (error.response?.status === 503) {
    return "Our AI assistant is temporarily unavailable. Please try again in a few minutes.";
  }
  
  return fallbackResponse;
}
```

---

## Advanced Features

### Webhooks

**Set up webhooks to receive real-time notifications:**

```json
{
  "url": "https://yourapp.com/webhooks/supportium",
  "events": ["conversation.started", "conversation.ended", "handover.requested"],
  "secret": "your_webhook_secret"
}
```

**Webhook payload example:**
```json
{
  "event": "conversation.started",
  "data": {
    "conversation_id": "conv_123",
    "user_id": "user_456", 
    "timestamp": "2025-08-31T10:00:00Z"
  },
  "signature": "sha256=signature_hash"
}
```

### Custom Actions

**Define custom actions that your AI can trigger:**

```json
{
  "action": "create_ticket",
  "parameters": {
    "title": "Customer needs help with billing",
    "priority": "high",
    "user_id": "user_123"
  }
}
```

### Batch Operations

**Process multiple requests efficiently:**

```json
{
  "requests": [
    {"endpoint": "/chat", "data": {"message": "Hello"}},
    {"endpoint": "/chat", "data": {"message": "How are you?"}}
  ]
}
```

---

## Testing and Development

### Sandbox Environment

Test your integration safely:
```
Base URL: https://api-sandbox.supportium.ai/v1
```

### API Testing Tools

**Postman Collection:**
Import our complete API collection for easy testing:
[Download Postman Collection](https://docs.supportium.ai/postman)

**Example Environment Variables:**
```
SUPPORTIUM_API_KEY=your_test_api_key
SUPPORTIUM_AGENT_ID=agent_test_123
BASE_URL=https://api-sandbox.supportium.ai/v1
```

### Testing Checklist

- [ ] API authentication works correctly
- [ ] Chat messages receive appropriate responses
- [ ] Error handling works as expected
- [ ] Rate limiting is properly managed
- [ ] Webhooks are received and processed
- [ ] User context is preserved across sessions

---

## API Reference Links

Explore detailed documentation for each endpoint:

### Core APIs
- **[Chat API](/api-documentation/chat-api)** - Real-time messaging and conversations
- **[User Data API](/api-documentation/user-data-api)** - User profiles and context
- **[Query API](/api-documentation/query-api)** - Direct knowledge base queries

### Integration Guides
- **[Webhook Setup](/features/user-data-api-and-api-actions)** - Real-time event notifications
- **[Custom Actions](/features/user-data-api-and-api-actions-user-data-api-setup)** - Extend functionality with custom workflows
- **[Authentication](/security-privacy/security-openai-api-keys)** - Secure API access

---

## Support and Resources

### Getting Help

**Technical Support:**
- 💬 **Live Chat**: Use the widget on this page for immediate assistance
- 📧 **Email**: [api-support@supportium.ai](mailto:api-support@supportium.ai)
- 📚 **Community**: Join our [developer community](https://community.supportium.ai)

**Resources:**
- 📖 **Complete API Reference**: Detailed endpoint documentation
- 🎥 **Video Tutorials**: Step-by-step integration guides
- 💻 **Code Examples**: Ready-to-use integration templates
- 🔧 **SDKs**: Official libraries for popular programming languages

### Stay Updated

- 📢 **Changelog**: [API updates and new features](https://changelog.supportium.ai)
- 📧 **Developer Newsletter**: Get notified of important changes
- 🐛 **Issue Tracking**: Report bugs and request features

:::tip **Ready to Build?**
Start with our **[Chat API](/api-documentation/chat-api)** to send your first message, or explore **[User Data API](/api-documentation/user-data-api)** for advanced personalization features.
:::

*Last updated: August 2025*
