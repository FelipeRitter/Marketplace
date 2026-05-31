# Local Backend Environment

This folder contains Docker Compose dependencies for backend development and integration testing.

## Start

```bash
docker compose up -d
```

## Stop

```bash
docker compose down
```

## Reset Data

```bash
docker compose down -v
```

## Connection Details

PostgreSQL:

- Host: `localhost`
- Port: `5432`
- Database: `marketplace`
- User: `marketplace`
- Password: `marketplace`

RabbitMQ:

- AMQP: `localhost:5672`
- Management UI: `http://localhost:15672`
- User: `marketplace`
- Password: `marketplace`

Mailpit:

- SMTP: `localhost:1025`
- UI: `http://localhost:8025`
