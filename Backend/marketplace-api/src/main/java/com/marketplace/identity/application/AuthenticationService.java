package com.marketplace.identity.application;

import com.marketplace.identity.api.AuthResponse;
import com.marketplace.identity.api.LoginRequest;
import com.marketplace.identity.api.RegisterRequest;
import com.marketplace.identity.api.UserResponse;
import com.marketplace.identity.domain.Address;
import com.marketplace.identity.domain.User;
import com.marketplace.identity.domain.UserRepository;
import com.marketplace.identity.domain.UserRole;
import com.marketplace.shared.security.TokenService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Locale;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder,
                                 AuthenticationManager authenticationManager, TokenService tokenService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        var email = normalizeEmail(request.email());
        if (userRepository.existsByEmailIgnoreCase(email)) {
            throw new DuplicateIdentityException("An account already exists for this email address");
        }
        if (userRepository.existsByDocumentNumber(request.documentNumber())) {
            throw new DuplicateIdentityException("An account already exists for this document number");
        }

        var requestedAddress = request.address();
        var address = new Address(requestedAddress.street(), requestedAddress.number(), requestedAddress.complement(),
                requestedAddress.neighborhood(), requestedAddress.city(), requestedAddress.state(),
                requestedAddress.postalCode(), requestedAddress.country());
        var user = User.create(email, passwordEncoder.encode(request.password()), request.fullName().trim(),
                request.birthDate(), request.documentNumber().trim(), request.phone().trim(), address, UserRole.USER);
        return authenticatedResponse(userRepository.save(user));
    }

    @Transactional(readOnly = true)
    public AuthResponse login(LoginRequest request) {
        var email = normalizeEmail(request.email());
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, request.password()));
        var user = findByEmail(email);
        return authenticatedResponse(user);
    }

    @Transactional(readOnly = true)
    public UserResponse currentUser(String email) {
        return UserResponse.from(findByEmail(email));
    }

    private User findByEmail(String email) {
        return userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new IdentityNotFoundException("User account was not found"));
    }

    private AuthResponse authenticatedResponse(User user) {
        var issuedToken = tokenService.issue(user);
        return new AuthResponse(issuedToken.value(), "Bearer", issuedToken.expiresInSeconds(), UserResponse.from(user));
    }

    private String normalizeEmail(String email) {
        return email.trim().toLowerCase(Locale.ROOT);
    }
}
