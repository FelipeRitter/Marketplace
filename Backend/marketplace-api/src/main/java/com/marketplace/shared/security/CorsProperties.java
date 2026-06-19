package com.marketplace.shared.security;

import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;

@ConfigurationProperties(prefix = "marketplace.security.cors")
public record CorsProperties(List<String> allowedOrigins) {
}
