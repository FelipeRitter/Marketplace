package com.marketplace.identity;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.ObjectMapper;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class AuthenticationFlowIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void registersUserAndReturnsAuthenticatedProfile() throws Exception {
        var response = mockMvc.perform(post("/api/v1/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(registrationJson("customer.one@marketplace.test", "DOC-1001")))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.tokenType").value("Bearer"))
                .andExpect(jsonPath("$.user.role").value("USER"))
                .andExpect(jsonPath("$.user.email").value("customer.one@marketplace.test"))
                .andReturn()
                .getResponse()
                .getContentAsString();

        var token = objectMapper.readTree(response).get("accessToken").asText();
        mockMvc.perform(get("/api/v1/auth/me").header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.fullName").value("Customer One"))
                .andExpect(jsonPath("$.address.city").value("Austin"));
    }

    @Test
    void rejectsDuplicateEmail() throws Exception {
        mockMvc.perform(post("/api/v1/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(registrationJson("duplicate@marketplace.test", "DOC-2001")))
                .andExpect(status().isCreated());

        mockMvc.perform(post("/api/v1/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(registrationJson("duplicate@marketplace.test", "DOC-2002")))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.title").value("Identity conflict"));
    }

    @Test
    void administratorCanAccessProtectedAdminEndpoint() throws Exception {
        var response = mockMvc.perform(post("/api/v1/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"email":"admin@marketplace.local","password":"Admin123!"}
                                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.user.role").value("ADMIN"))
                .andReturn()
                .getResponse()
                .getContentAsString();

        var token = objectMapper.readTree(response).get("accessToken").asText();
        mockMvc.perform(get("/api/v1/admin/status").header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("available"));
    }

    @Test
    void regularUserCannotAccessAdminEndpoint() throws Exception {
        var response = mockMvc.perform(post("/api/v1/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(registrationJson("customer.two@marketplace.test", "DOC-3001")))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString();

        var token = objectMapper.readTree(response).get("accessToken").asText();
        mockMvc.perform(get("/api/v1/admin/status").header("Authorization", "Bearer " + token))
                .andExpect(status().isForbidden());
    }

    private String registrationJson(String email, String documentNumber) {
        return """
                {
                  "fullName": "Customer One",
                  "email": "%s",
                  "password": "Customer123!",
                  "birthDate": "1992-04-16",
                  "documentNumber": "%s",
                  "phone": "+1 512 555 0198",
                  "address": {
                    "street": "Market Street",
                    "number": "482",
                    "complement": "Apt 1204",
                    "neighborhood": "Central District",
                    "city": "Austin",
                    "state": "TX",
                    "postalCode": "78701",
                    "country": "United States"
                  }
                }
                """.formatted(email, documentNumber);
    }
}
