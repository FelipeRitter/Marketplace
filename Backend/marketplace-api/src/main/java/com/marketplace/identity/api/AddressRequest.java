package com.marketplace.identity.api;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record AddressRequest(
        @NotBlank @Size(max = 180) String street,
        @NotBlank @Size(max = 30) String number,
        @Size(max = 120) String complement,
        @NotBlank @Size(max = 120) String neighborhood,
        @NotBlank @Size(max = 120) String city,
        @NotBlank @Size(max = 80) String state,
        @NotBlank @Size(max = 30) String postalCode,
        @NotBlank @Size(max = 100) String country
) {
}
