package com.marketplace.identity.api;

import com.marketplace.identity.domain.User;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

public record UserResponse(
        UUID id,
        String fullName,
        String email,
        LocalDate birthDate,
        String documentNumber,
        String phone,
        String role,
        AddressResponse address,
        Instant createdAt
) {
    public static UserResponse from(User user) {
        return new UserResponse(user.getId(), user.getFullName(), user.getEmail(), user.getBirthDate(),
                user.getDocumentNumber(), user.getPhone(), user.getRole().name(),
                AddressResponse.from(user.getAddress()), user.getCreatedAt());
    }
}
