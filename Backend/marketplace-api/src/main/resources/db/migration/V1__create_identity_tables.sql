CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(320) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(160) NOT NULL,
    birth_date DATE,
    document_number VARCHAR(80) UNIQUE,
    phone VARCHAR(40),
    role VARCHAR(20) NOT NULL,
    enabled BOOLEAN NOT NULL DEFAULT TRUE,
    street VARCHAR(180),
    address_number VARCHAR(30),
    complement VARCHAR(120),
    neighborhood VARCHAR(120),
    city VARCHAR(120),
    state VARCHAR(80),
    postal_code VARCHAR(30),
    country VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
    CONSTRAINT chk_users_role CHECK (role IN ('USER', 'ADMIN'))
);

CREATE INDEX idx_users_email ON users (email);
CREATE INDEX idx_users_document_number ON users (document_number);
