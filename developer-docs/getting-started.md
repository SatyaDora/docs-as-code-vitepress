# Getting Started

Welcome to the Surf Weather API.

This guide helps you make your first successful API request. By the end, you will have an account, an API key, and a working setup ready for your first call.

---

## Prerequisites

Before you begin:

- **Create an OpenWeather account** — sign up at the provider's website with your email address
- **Generate an API key** — from your account dashboard, create a new key and copy it somewhere safe; it is only shown in full once
- **Install a REST client** — [Postman](https://www.postman.com/) for a graphical interface, or `curl` for the command line

---

## Base URL

All API requests are made to:

`https://api.openweathermap.org/data/2.5`

The current version (v1) exposes a single endpoint:

- `GET /weather` — current weather by city name

---

## Make Your First Request

With your API key ready, call the `/weather` endpoint with a city name:

```
https://api.openweathermap.org/data/2.5/weather?q=Goa&appid=YOUR_API_KEY
```

A successful call returns a JSON payload with the current weather description, temperature, wind, and more. For a full walkthrough of the request and response, see [First API Call](v1/first-api-call.md).

---

## Best Practices

- **Never expose API keys publicly** — do not commit them to Git or embed them in client-side code
- **Store keys in environment variables** — for example, `export WEATHER_API_KEY=your_key_here`
- **Rotate keys periodically** — generate a new key on a regular schedule and revoke the old one

---

## Common Errors

| Code | Meaning | What to do |
|---|---|---|
| 401 | Invalid API key | Check that your key is correct and active; confirm you passed it as the `appid` parameter |

For the full list, see the [Error Catalog](error-catalog.md).

---

## Next Step

➡️ Continue to [First API Call](v1/first-api-call.md)

---
