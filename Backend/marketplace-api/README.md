# Marketplace API

Spring Boot modular monolith backend for MarketNest.

## Authentication Module

The identity model deliberately does not classify users as buyers or sellers. Every regular account receives the `USER` role and can later participate in either buying or selling workflows. `ADMIN` is reserved for future operational permissions.

### Endpoints

| Method | Endpoint | Access | Purpose |
| --- | --- | --- | --- |
| POST | `/api/v1/auth/register` | Public | Register a complete customer account and return a JWT. |
| POST | `/api/v1/auth/login` | Public | Authenticate by email/password and return a JWT. |
| GET | `/api/v1/auth/me` | Bearer token | Return the authenticated profile. |
| GET | `/api/v1/admin/status` | ADMIN only | Verify administrator authorization. |

### Default Development Administrator

- Email: `admin@marketplace.local`
- Password: `Admin123!`

Override these values through environment variables before deploying anywhere outside local development.

## Run Locally

Start PostgreSQL first:

```bash
cd ../local
docker compose up -d postgres
```

Run the API:

```bash
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
.\mvnw.cmd spring-boot:run
```

The API runs at `http://localhost:8080`.

## Test

```powershell
.\mvnw.cmd test
```

Integration tests use an in-memory H2 database and do not require Docker.

## Security Notes

- Passwords are stored with BCrypt strength 12.
- JWT access tokens use HS256 and include `user_id` and `roles` claims.
- The issuer and expiration are validated for protected requests.
- Public registration always creates `USER`; clients cannot self-assign `ADMIN`.
- Email and document number are unique identities.
- Local Angular origins are allowed through CORS configuration.
