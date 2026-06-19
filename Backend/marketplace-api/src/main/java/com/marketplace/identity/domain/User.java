package com.marketplace.identity.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {

    @Id
    private UUID id;

    @Column(nullable = false, unique = true, length = 320)
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Column(name = "full_name", nullable = false, length = 160)
    private String fullName;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(name = "document_number", unique = true, length = 80)
    private String documentNumber;

    @Column(length = 40)
    private String phone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private UserRole role;

    @Column(nullable = false)
    private boolean enabled;

    @Embedded
    private Address address;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    protected User() {
    }

    private User(UUID id, String email, String passwordHash, String fullName, LocalDate birthDate,
                 String documentNumber, String phone, UserRole role, Address address, Instant now) {
        this.id = id;
        this.email = email;
        this.passwordHash = passwordHash;
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.documentNumber = documentNumber;
        this.phone = phone;
        this.role = role;
        this.enabled = true;
        this.address = address;
        this.createdAt = now;
        this.updatedAt = now;
    }

    public static User create(String email, String passwordHash, String fullName, LocalDate birthDate,
                              String documentNumber, String phone, Address address, UserRole role) {
        return new User(UUID.randomUUID(), email, passwordHash, fullName, birthDate,
                documentNumber, phone, role, address, Instant.now());
    }

    public UUID getId() { return id; }
    public String getEmail() { return email; }
    public String getPasswordHash() { return passwordHash; }
    public String getFullName() { return fullName; }
    public LocalDate getBirthDate() { return birthDate; }
    public String getDocumentNumber() { return documentNumber; }
    public String getPhone() { return phone; }
    public UserRole getRole() { return role; }
    public boolean isEnabled() { return enabled; }
    public Address getAddress() { return address; }
    public Instant getCreatedAt() { return createdAt; }
}
