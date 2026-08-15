# About This Project

This documentation portal was created as a real-world simulation of startup API documentation. It serves the fictional **Surf Weather API** — a service providing real-time coastal and surf weather data — and demonstrates how a small team can plan, structure, and maintain developer-facing documentation using a docs-as-code workflow.

---

## Project Goal

The goal was to design a developer-first documentation system that demonstrates:

- **API documentation strategy** — planning content around what developers actually need, in the order they need it
- **Developer onboarding flow** — a guided path from account creation to the first successful API call
- **Versioned documentation architecture** — stable (v1) and beta (v2) documentation living side by side
- **Docs-as-code workflow** — documentation written in Markdown, versioned in Git, and published like software

---

## Tools Used

- **MkDocs (Material Theme)** — static site generator and theme used to build and style the portal
- **Markdown** — the authoring format for all guides and reference pages
- **OpenAPI Specification (YAML)** — the machine-readable API contract (`openapi.yaml`) used for interactive testing
- **Git-based workflow** — branching, pull requests, and reviews applied to documentation changes

---

## Documentation Strategy

The structure follows a developer journey:

1. Introduction & onboarding
2. Authentication
3. First API call
4. SDK usage
5. Error handling
6. Versioned API reference

This reduces friction for new developers: each page answers the question that naturally arises after the previous one, instead of forcing readers to hunt through a flat reference.

---

## Versioning Approach

- **v1** → Stable production API
- **v2** → Beta / future enhancements

Version folders allow independent evolution of APIs and documentation. Breaking changes ship in a new version folder while the stable version remains untouched, so existing integrators are never surprised.

---

## API Reference Approach

Instead of embedding Swagger directly, the documentation links to the OpenAPI specification.

This mirrors many real-world startup practices where:

- Guides remain lightweight
- API testing is handled via Swagger Editor or dedicated portals

---

## Key Skills Demonstrated

This project demonstrates:

- API documentation planning
- Information architecture
- Developer experience thinking
- Documentation lifecycle management
- Docs-as-code workflows

---

## Future Enhancements

Planned improvements include:

- Automated API reference generation
- Analytics-driven documentation improvements
- Version comparison pages
- SDK auto-generation

---

## 👨 Author

**Satya Dora Velnati**,

Technical Documentation Portfolio Project  
Focused on Developer Experience and API Documentation.

---
