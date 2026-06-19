package com.marketplace.identity.application;

import com.marketplace.identity.domain.User;
import com.marketplace.identity.domain.UserRepository;
import com.marketplace.identity.domain.UserRole;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Locale;

@Component
public class AdminBootstrap implements ApplicationRunner {

    private static final Logger logger = LoggerFactory.getLogger(AdminBootstrap.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final boolean enabled;
    private final String email;
    private final String password;
    private final String fullName;

    public AdminBootstrap(UserRepository userRepository, PasswordEncoder passwordEncoder,
                          @Value("${marketplace.bootstrap.admin.enabled}") boolean enabled,
                          @Value("${marketplace.bootstrap.admin.email}") String email,
                          @Value("${marketplace.bootstrap.admin.password}") String password,
                          @Value("${marketplace.bootstrap.admin.full-name}") String fullName) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.enabled = enabled;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
    }

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        if (!enabled) {
            return;
        }
        var normalizedEmail = email.trim().toLowerCase(Locale.ROOT);
        if (userRepository.existsByEmailIgnoreCase(normalizedEmail)) {
            return;
        }
        var administrator = User.create(normalizedEmail, passwordEncoder.encode(password), fullName,
                null, null, null, null, UserRole.ADMIN);
        userRepository.save(administrator);
        logger.warn("Default administrator created for {}. Change BOOTSTRAP_ADMIN_PASSWORD before production.", normalizedEmail);
    }
}
