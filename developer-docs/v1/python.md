# Python SDK Example

This page demonstrates how to call the Surf Weather API from Python using the `requests` library.

---

## Prerequisites

- Python 3.8 or later
- The `requests` library:

```bash
pip install requests
```

- An API key stored in an environment variable (see [Authentication](../authentication.md)):

```bash
export WEATHER_API_KEY="your_key_here"
```

---

## Example Code

This snippet demonstrates how to fetch current weather data for Goa using the Python `requests` library.

```python
import os
import requests

url = "https://api.openweathermap.org/data/2.5/weather"
params = {
    "q": "Goa",
    "appid": os.environ["WEATHER_API_KEY"]
}

response = requests.get(url, params=params, timeout=10)
response.raise_for_status()

data = response.json()
print(data)
```

---

## How It Works

1. **Load the key from the environment** — `os.environ["WEATHER_API_KEY"]` keeps the secret out of your source code.
2. **Build the request** — the `params` dict is URL-encoded automatically by `requests`.
3. **Set a timeout** — `timeout=10` prevents your script from hanging on a stalled connection.
4. **Check for errors** — `raise_for_status()` throws an exception on 4xx/5xx responses so failures never pass silently.
5. **Parse the JSON** — `response.json()` converts the payload into a Python dictionary.

---

## Sample Output

```python
{'weather': [{'description': 'clear sky'}]}
```

---

## Next Steps

- Add error handling for `401` and `429` responses — see the [Error Catalog](../error-catalog.md)
- Cache responses to stay within your quota — see [Rate Limits](../rate-limits.md)

---
