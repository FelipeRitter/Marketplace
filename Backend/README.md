# Marketplace Backend

Backend workspace for the Marketplace project.

## Direction

The backend will start as a Spring Boot modular monolith, prepared for future service extraction when a bounded context has enough operational need to become a microservice.

## Runtime Stack

- Java 26 currently installed locally
- Spring Boot 4.1
- Maven
- PostgreSQL
- Flyway
- Spring Security with JWT/OAuth2
- OpenAPI
- Testcontainers
- Docker Compose for local dependencies

## Local Dependencies

The local environment is defined in `local/docker-compose.yml`.

```bash
cd Backend/local
docker compose up -d
```

Services:

- PostgreSQL: `localhost:5432`
- RabbitMQ: `localhost:5672`
- RabbitMQ Management UI: `http://localhost:15672`
- Mailpit SMTP: `localhost:1025`
- Mailpit UI: `http://localhost:8025`

## Suggested Backend Modules

- Identity and Account
- Catalog
- Seller
- Cart
- Order
- Payment
- Notification

See `docs/backend-architecture.md` for the initial architecture notes.

## Marketplace API

The Spring Boot application lives in `marketplace-api`.

The first implemented module is Identity and Authentication, with:

- Complete user registration.
- Email/password login.
- JWT access tokens.
- Authenticated profile endpoint.
- Default local administrator.
- Role-based administrator authorization.

See `marketplace-api/README.md` for endpoints, local credentials, configuration, and test commands.
