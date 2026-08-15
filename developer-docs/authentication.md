# Authentication

All API requests require an API key. Requests without a valid key are rejected with a `401 Unauthorized` response.

---

## How to Get an API Key

1. Create an account on the provider's website.
2. Open your account dashboard and navigate to the **API Keys** section.
3. Click **Generate New Key**, give it a recognizable name (for example, `mobile-app-prod`), and copy it.
4. Store the key securely — treat it like a password.

---

## Authentication Method

Authentication is performed using query parameters. Append your key as the `appid` parameter on every request.

Example:

`https://api.openweathermap.org/data/2.5/weather?q=Goa&appid=YOUR_API_KEY`

---

## Using Environment Variables

Avoid hard-coding your key. Load it from the environment instead:

```bash
export WEATHER_API_KEY="your_key_here"
```

```python
import os
api_key = os.environ["WEATHER_API_KEY"]
```

This keeps secrets out of source control and makes key rotation painless.

---

## Best Practices

- **Never expose API keys publicly** — keep them out of Git repositories, tickets, and screenshots
- **Store keys in environment variables** — or a secrets manager in production
- **Rotate keys periodically** — revoke old keys after rotation and audit usage in your dashboard

---

## Common Errors

| Code | Meaning | What to do |
|---|---|---|
| 401 | Invalid API key | Verify the key is correct, active, and passed as `appid`; check for extra whitespace when copying |

---

## Next Step

➡️ Continue to [First API Call](v1/first-api-call.md)

---
