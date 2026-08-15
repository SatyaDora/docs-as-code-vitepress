# First API Call

This tutorial walks you through your first request to the Surf Weather API. By the end, you will have retrieved current weather data for a city and understood the response.

---

## Before You Begin

Make sure you have:

- An API key (see [Authentication](../authentication.md))
- A REST client such as Postman, or `curl` on the command line

---

## Example Request

Replace `YOUR_API_KEY` with your actual key:

`https://api.openweathermap.org/data/2.5/weather?q=Goa&appid=YOUR_API_KEY`

Using curl:

```bash
curl "https://api.openweathermap.org/data/2.5/weather?q=Goa&appid=YOUR_API_KEY"
```

### Request Parameters

| Parameter | Location | Required | Description |
|---|---|---|---|
| `q` | query | Yes | City name — for example, `Goa` |
| `appid` | query | Yes | Your API key |

---

## Example Response

A successful request returns HTTP `200` with a JSON body:

```json
{
  "weather": [
    {
      "description": "clear sky"
    }
  ]
}
```

### Understanding the Response

- `weather` — an array of condition objects for the location
- `description` — a human-readable summary of current conditions (for example, `clear sky`, `scattered clouds`, `light rain`)

The full payload includes additional fields such as temperature, humidity, pressure, and wind. See the [OpenAPI specification](openapi.yaml) for the complete schema.

---

## If Something Goes Wrong

| Symptom | Likely cause | Fix |
|---|---|---|
| `401` response | Invalid or missing API key | Verify the `appid` parameter — see [Authentication](../authentication.md) |
| `404` response | City not found | Check the spelling of `q`, or try a nearby larger city |
| `429` response | Too many requests | Slow down — see [Rate Limits](../rate-limits.md) |

---

## Next Step

➡️ Continue to the [Python SDK Example](python.md) to integrate the API into code.

---
