# Email

## Purpose

Display email messages in an inbox-style view.

## When to Use

- Email inbox interfaces
- Message thread displays
- Notification centers
- Communication logs

## Props Reference

| Prop   | Type    | Required | Description    |
| ------ | ------- | -------- | -------------- |
| title  | string  | No       | Inbox title    |
| emails | array   | Yes      | List of emails |
| lock   | boolean | No       | Lock editing   |

### Email Structure

```typescript
{
  id: string;       // Unique ID (REQUIRED)
  from: string;     // Sender name/email (REQUIRED)
  subject: string;  // Email subject (REQUIRED)
  body: string;     // Email content (REQUIRED)
  date: string;     // Date/time (REQUIRED)
  read?: boolean;   // Read status
}
```

## AI Generation Rules

1. ALWAYS use Email for inbox/mail interfaces
2. Each email MUST have id, from, subject, body, date
3. Use realistic sender names and subjects
4. Include read status for inbox views

## Streaming Strategy

```jsonl
{"op":"add","path":"/elements/email1","value":{"key":"email1","type":"Email","props":{"title":"Inbox","emails":[]},"children":[]}}
{"op":"add","path":"/elements/email1/props/emails/-","value":{"id":"e1","from":"John Smith","subject":"Meeting Tomorrow","body":"Hi, let's meet at 3pm...","date":"2024-01-15 09:30","read":false}}
{"op":"add","path":"/elements/email1/props/emails/-","value":{"id":"e2","from":"Support Team","subject":"Your ticket #1234","body":"Your issue has been resolved...","date":"2024-01-14 16:45","read":true}}
```

## Examples

```json
{
  "type": "Email",
  "props": {
    "title": "Work Inbox",
    "emails": [
      {
        "id": "em1",
        "from": "Sarah Chen",
        "subject": "Q4 Report Review",
        "body": "Please review the attached Q4 report before our meeting tomorrow.",
        "date": "2024-01-15 10:30",
        "read": false
      },
      {
        "id": "em2",
        "from": "IT Department",
        "subject": "System Maintenance Notice",
        "body": "Scheduled maintenance will occur this Saturday from 2-4 AM.",
        "date": "2024-01-14 14:00",
        "read": true
      }
    ]
  }
}
```
