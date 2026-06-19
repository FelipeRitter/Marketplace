package com.marketplace.identity.api;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public record RegisterRequest(
        @NotBlank @Size(max = 160) String fullName,
        @NotBlank @Email @Size(max = 320) String email,
        @NotBlank
        @Size(min = 8, max = 72)
        @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$",
                message = "must contain uppercase, lowercase, and numeric characters")
        String password,
        @NotNull @Past LocalDate birthDate,
        @NotBlank @Size(max = 80) String documentNumber,
        @NotBlank @Pattern(regexp = "^[+0-9() .-]{7,40}$") String phone,
        @NotNull @Valid AddressRequest address
) {
}
