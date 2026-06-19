package com.marketplace.identity.api;

public record AuthResponse(
        String accessToken,
        String tokenType,
        long expiresIn,
        UserResponse user
) {
}
