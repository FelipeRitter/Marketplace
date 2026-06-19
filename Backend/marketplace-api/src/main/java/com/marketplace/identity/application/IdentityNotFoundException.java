package com.marketplace.identity.application;

public class IdentityNotFoundException extends RuntimeException {
    public IdentityNotFoundException(String message) {
        super(message);
    }
}
