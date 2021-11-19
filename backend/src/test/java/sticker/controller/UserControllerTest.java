package sticker.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithAnonymousUser;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
//@Sql("/scripts/add_test_user.sql")
//@Transactional
@AutoConfigureMockMvc
@AutoConfigureRestDocs(outputDir = "snippets")
@Testcontainers
@ActiveProfiles("testcontainers")
class UserControllerTest {

    @Autowired
    UserController userController;

    @Autowired
    MockMvc mockMvc;

    @Container
    public static PostgreSQLContainer postgresqlContainer = new PostgreSQLContainer("postgres:latest")
            .withDatabaseName("test")
            .withUsername("test")
            .withPassword("pass");

    @Test
    @WithUserDetails
    public void testCurrentUser() throws Exception {
        assertTrue(postgresqlContainer.isRunning());
        mockMvc.perform(get("/api/users/0"))
               .andExpect(status().isOk())
               .andExpect(content().contentType(MediaType.APPLICATION_JSON))
               .andExpect(jsonPath("$.username").value("user"))
               .andDo(document("Current user", responseFields(
                       fieldWithPath("id").description("The internal id of the user"),
                       fieldWithPath("username").description("The username chosen on registration"),
                       subsectionWithPath("roles.[]").description("The roles this user belongs to"),
                       fieldWithPath("enabled").description("Notes whether the account is enabled"),
                       subsectionWithPath("authorities.[]").description("Same as roles"),
                       fieldWithPath("accountNonExpired").description("Notes whether the account is expired"),
                       fieldWithPath("accountNonLocked").description("Notes whether the account is locked"),
                       fieldWithPath("credentialsNonExpired").description("Notes whether the credentials expired")
               )));
    }

    @Test
    @WithAnonymousUser
    public void testCurrentUser_notSignedIn() throws Exception {
        mockMvc.perform(get("/api/users/0"))
               .andExpect(status().isUnauthorized());
    }
}


