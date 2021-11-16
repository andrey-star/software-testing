package sticker.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithAnonymousUser;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;

import javax.transaction.Transactional;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@Sql("/scripts/add_test_user.sql")
@Transactional
@AutoConfigureMockMvc
@AutoConfigureRestDocs(outputDir = "snippets")
class UserControllerTest {

    @Autowired
    UserController userController;

    @Autowired
    MockMvc mockMvc;

    @Test
    @WithUserDetails
    public void testCurrentUser() throws Exception {
        mockMvc.perform(get("/api/users/0"))
               .andExpect(status().isOk())
               .andExpect(content().contentType(MediaType.APPLICATION_JSON))
               .andExpect(jsonPath("$.username").value("user"))
               .andDo(document("Current user", responseFields(
                       fieldWithPath("id").description("The internal id of the user"),
                       fieldWithPath("username").description("The username chosen on registration"),
                       fieldWithPath("roles").description("The roles this user belongs to"),
                       fieldWithPath("enabled").description("Notes whether the account is enabled"),
                       fieldWithPath("authorities").description("Same as roles"),
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
