# Backend Architecture

## Architecture Style

Start with a modular monolith and keep module boundaries explicit. This gives us fast development and simple deployment while preserving the option to extract microservices later.

## Initial Bounded Contexts

### Identity And Account

Owns customer identity, authentication, profiles, document data, addresses, and account preferences.

### Catalog

Owns product read models, categories, search inputs, product media references, and public product detail data.

### Seller

Owns seller onboarding, listings, stock, listing publication state, and seller-facing operations.

### Cart

Owns shopping cart state, item quantities, subtotal calculation, and checkout preparation.

### Order

Owns order placement, order status, order history, fulfillment state, and return entry points.

### Payment

Owns payment intent, payment confirmation, refunds, and integration boundaries with payment providers.

### Notification

Owns outbound messages such as email confirmations, shipment updates, and account events.

## Extraction Criteria

Extract a module into a microservice only when at least one of these becomes true:

- It needs independent scaling.
- It has independent deployment cadence.
- It has data ownership that should be isolated physically.
- It integrates with external systems and benefits from operational isolation.
- Its team ownership becomes independent.

## Local Infrastructure

The development environment uses Docker Compose with:

- PostgreSQL for transactional storage.
- RabbitMQ for asynchronous events when needed.
- Mailpit for local email testing.

## Testing Strategy

- Unit tests for domain rules.
- Integration tests with Spring Boot test slices.
- Testcontainers for PostgreSQL and RabbitMQ integration tests.
- Contract tests before extracting services.
