package com.marketplace.identity.application;

public class DuplicateIdentityException extends RuntimeException {
    public DuplicateIdentityException(String message) {
        super(message);
    }
}
