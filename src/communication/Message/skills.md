# Message

## Purpose

Chat interface for displaying conversation threads with multiple participants.

## When to Use

- Chat/messaging interfaces
- Multi-agent conversations
- Support ticket threads
- Team communication displays

## Props Reference

| Prop         | Type    | Required | Description                          |
| ------------ | ------- | -------- | ------------------------------------ |
| title        | string  | No       | Chat title                           |
| messages     | array   | Yes      | Message history                      |
| participants | array   | No       | Chat participants                    |
| activeAgents | array   | No       | IDs of currently typing participants |
| lock         | boolean | No       | Lock editing                         |

### Message Structure

```typescript
{
  id: string;           // Unique ID (REQUIRED)
  sender: string;       // Sender name (REQUIRED)
  content: string;      // Message text (REQUIRED)
  timestamp: string;    // Time sent (REQUIRED)
  participantId?: string;// Link to participant
}
```

### Participant Structure

```typescript
{
  id: string;       // Unique ID (REQUIRED)
  name: string;     // Display name (REQUIRED)
  role: string;     // Role/title (REQUIRED)
  avatar?: string;  // Avatar URL
  color?: string;   // Message bubble color
}
```

## AI Generation Rules

1. ALWAYS use Message for chat/conversation interfaces
2. Each message MUST have id, sender, content, timestamp
3. Define participants for multi-person chats
4. Order messages chronologically

## Streaming Strategy

```jsonl
{"op":"add","path":"/elements/chat1","value":{"key":"chat1","type":"Message","props":{"title":"Team Chat","participants":[],"messages":[]},"children":[]}}
{"op":"add","path":"/elements/chat1/props/participants/-","value":{"id":"p1","name":"Alice","role":"Developer","color":"#3b82f6"}}
{"op":"add","path":"/elements/chat1/props/participants/-","value":{"id":"p2","name":"Bob","role":"Designer","color":"#10b981"}}
{"op":"add","path":"/elements/chat1/props/messages/-","value":{"id":"m1","sender":"Alice","content":"Has anyone reviewed the PR?","timestamp":"10:30 AM","participantId":"p1"}}
{"op":"add","path":"/elements/chat1/props/messages/-","value":{"id":"m2","sender":"Bob","content":"Looking at it now!","timestamp":"10:32 AM","participantId":"p2"}}
```

## Examples

```json
{
  "type": "Message",
  "props": {
    "title": "Project Discussion",
    "participants": [
      {
        "id": "user1",
        "name": "Sarah",
        "role": "Product Manager",
        "color": "#8b5cf6"
      },
      { "id": "user2", "name": "Mike", "role": "Engineer", "color": "#06b6d4" }
    ],
    "messages": [
      {
        "id": "msg1",
        "sender": "Sarah",
        "content": "How's the feature looking?",
        "timestamp": "2:30 PM",
        "participantId": "user1"
      },
      {
        "id": "msg2",
        "sender": "Mike",
        "content": "Almost done, just fixing a few edge cases.",
        "timestamp": "2:32 PM",
        "participantId": "user2"
      },
      {
        "id": "msg3",
        "sender": "Sarah",
        "content": "Great! Let me know when it's ready for review.",
        "timestamp": "2:33 PM",
        "participantId": "user1"
      }
    ]
  }
}
```
