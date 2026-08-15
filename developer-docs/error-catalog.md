# Error Catalog

This page lists common API errors and resolutions. All errors are returned as standard HTTP status codes; log them during development so failures are easy to diagnose.

---

## Error Reference

| Code | Description | Resolution |
|---|---|---|
| 400 | Bad request | Verify parameters — a required parameter such as `q` is missing or malformed |
| 401 | Unauthorized | Check API key — confirm it is correct, active, and passed as the `appid` query parameter |
| 404 | Not found | Verify endpoint — check the URL path spelling, and confirm the city name exists (try a nearby larger city) |
| 429 | Rate limit exceeded | Retry later — wait for the rate-limit window to reset, and implement exponential backoff (see [Rate Limits](rate-limits.md)) |
| 500 | Server error | Retry or contact support — if the error persists for more than a few minutes, reach out to support@surfweather.com |

---

## Handling Errors in Code

Always check the status code before parsing the response body:

```python
response = requests.get(url, params=params)

if response.status_code == 200:
    data = response.json()
elif response.status_code == 401:
    raise RuntimeError("Invalid API key — check your appid parameter")
elif response.status_code == 429:
    raise RuntimeError("Rate limited — back off and retry")
else:
    response.raise_for_status()
```

---

## Debugging Tip

Always log response status codes during development. Pair the status code with the request URL (with the API key masked) so you can reproduce failing calls quickly.

---

## Related

- [Authentication](authentication.md) — fixing `401` errors
- [Rate Limits](rate-limits.md) — avoiding `429` errors

---
