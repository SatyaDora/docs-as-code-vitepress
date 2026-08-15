# API v1 Reference

🟢 **Status:** Stable

---

## Overview

API v1 provides production-ready weather endpoints. It is the recommended version for all live integrations and is covered by the stable API guarantee — no breaking changes will be introduced to v1.

---

## Base URL

`https://api.openweathermap.org/data/2.5`

All requests must be authenticated with an API key — see [Authentication](../authentication.md).

---

## Interactive Testing

Download the OpenAPI specification:

[Download OpenAPI Spec](openapi.yaml)

Open Swagger Editor:

[Open Swagger Editor](https://editor.swagger.io/)

Import the YAML file (**File → Import File**) to explore endpoints, parameters, and response schemas, and to generate sample requests.

---

## Available Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/weather` | GET | Current weather by city |

### `GET /weather`

Returns current weather conditions for the requested city.

**Query parameters**

| Name | Required | Type | Description |
|---|---|---|---|
| `q` | Yes | string | City name (for example, `Goa`) |
| `appid` | Yes | string | Your API key |

**Responses**

| Code | Description |
|---|---|
| 200 | Successful response — JSON weather payload |
| 401 | Invalid API key |

For a complete walkthrough, see [First API Call](first-api-call.md). For a code integration, see the [Python example](python.md).

---

## Versioning

- **v1 (this version)** — stable, production-ready
- **v2** — beta; see the [v2 Overview](../v2/overview.md) for planned enhancements

---
