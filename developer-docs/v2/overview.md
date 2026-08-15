# API v2 Overview

🟡 **Status:** Beta

API v2 is the next generation of the Surf Weather API. It is under active development and is **not recommended for production use** — schemas and behavior may change without notice.

---

## Planned Improvements

- **Improved response consistency** — a uniform envelope for all endpoints, with predictable field naming and data types across responses
- **Extended forecast data** — hourly and multi-day forecast endpoints beyond the current-conditions data available in v1
- **Better error messaging** — structured error bodies with machine-readable codes and human-readable details, replacing plain status-only failures

---

## Trying the Beta

1. Review the planned changes above and confirm your integration can tolerate breaking changes.
2. Test against v2 in a development environment only.
3. Report issues and feedback to support@surfweather.com — beta feedback directly shapes the stable release.

---

## Migration from v1

When v2 reaches stable, a migration guide will be published here covering:

- Endpoint and schema changes
- Authentication differences (if any)
- Deprecation timeline for v1

Until then, continue using [API v1](../v1/overview.md) for all production traffic.

---

## Note

v2 is under active development. Check this page and the [Changelog](../../changelog.md) for updates.

---
