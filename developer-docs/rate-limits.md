# Rate Limits

Rate limits prevent API abuse and ensure stability. They cap how many requests your API key can make within a given time window, keeping the service fast and reliable for everyone.

---

## Typical Limits

| Plan | Requests |
|---|---|
| Free Tier | Limited requests per minute (suitable for development and testing) |
| Paid Tier | Higher request limits (suitable for production applications) |

Exact quotas depend on your subscription — check your account dashboard for current limits and usage.

---

## What Happens When You Exceed the Limit

Requests beyond your quota receive a `429 Too Many Requests` response. The limit resets at the start of the next window, so you can resume calling after a short wait.

---

## Best Practices

- **Cache responses where possible** — current conditions change every few minutes, so caching a response for 5–10 minutes drastically cuts request volume
- **Avoid polling too frequently** — request data only when you need it, not on a fixed rapid loop
- **Implement retry logic** — when you receive a `429`, back off exponentially (wait 1s, then 2s, then 4s…) instead of retrying immediately
- **Batch location lookups** — if your app tracks many spots, stagger the calls rather than firing them all at once
- **Monitor your usage** — keep an eye on the dashboard so you can upgrade before hitting the ceiling

---

## Related

- Error responses: see the [Error Catalog](error-catalog.md)
- Authentication: see [Authentication](authentication.md)

---
