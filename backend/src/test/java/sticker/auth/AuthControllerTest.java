package sticker.auth;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Sql("/scripts/add_test_user.sql")
@Transactional
class AuthControllerTest {

    @Autowired
    AuthController authController;

    @Test
    public void testSignIn() {
        AuthResponse response = authController.login(new AuthController.AuthRequest("user", "user"));
        assertEquals("user", response.getUser().getUsername());
    }

    @Test
    public void testSignIn_UserDoesntExist() {
        assertThrows(RuntimeException.class,
                () -> authController.login(new AuthController.AuthRequest("no-user", "user")));
    }

    @Test
    public void testSignIn_InvalidPassword() {
        assertThrows(RuntimeException.class,
                () -> authController.login(new AuthController.AuthRequest("user", "not-password")));
    }

    @Test
    public void testRegister() {
        AuthResponse response = authController.register(new AuthController.AuthRequest("user2", "user2"));
        assertEquals("user2", response.getUser().getUsername());
    }

    @Test
    public void testRegister_UserExists() {
        assertThrows(RuntimeException.class,
                () -> authController.register(new AuthController.AuthRequest("user", "user")));
    }

}
