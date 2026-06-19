package com.marketplace.shared.error;

import com.marketplace.identity.application.DuplicateIdentityException;
import com.marketplace.identity.application.IdentityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.net.URI;
import java.time.Instant;
import java.util.LinkedHashMap;

@RestControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(DuplicateIdentityException.class)
    ProblemDetail duplicateIdentity(DuplicateIdentityException exception) {
        return problem(HttpStatus.CONFLICT, "Identity conflict", exception.getMessage());
    }

    @ExceptionHandler(IdentityNotFoundException.class)
    ProblemDetail identityNotFound(IdentityNotFoundException exception) {
        return problem(HttpStatus.NOT_FOUND, "Identity not found", exception.getMessage());
    }

    @ExceptionHandler(BadCredentialsException.class)
    ProblemDetail badCredentials() {
        return problem(HttpStatus.UNAUTHORIZED, "Authentication failed", "Invalid email or password");
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    ProblemDetail validation(MethodArgumentNotValidException exception) {
        var detail = problem(HttpStatus.BAD_REQUEST, "Validation failed", "The request contains invalid fields");
        var errors = new LinkedHashMap<String, String>();
        exception.getBindingResult().getFieldErrors()
                .forEach(error -> errors.putIfAbsent(error.getField(), error.getDefaultMessage()));
        detail.setProperty("errors", errors);
        return detail;
    }

    private ProblemDetail problem(HttpStatus status, String title, String detail) {
        var problem = ProblemDetail.forStatusAndDetail(status, detail);
        problem.setTitle(title);
        problem.setType(URI.create("https://marketplace.local/problems/" + status.value()));
        problem.setProperty("timestamp", Instant.now());
        return problem;
    }
}
