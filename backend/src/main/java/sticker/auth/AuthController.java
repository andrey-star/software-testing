package sticker.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sticker.auth.jwt.JWTService;
import sticker.model.User;
import sticker.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;
    private final PasswordEncoder encoder;

    public AuthController(UserService userService, AuthenticationManager authenticationManager, JWTService jwtService, PasswordEncoder encoder) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.encoder = encoder;
    }

    @PostMapping("/signin")
    public AuthResponse login(@RequestBody AuthRequest req) {
        User user = userService.loadUserByUsername(req.username);
        authenticate(req);
        return new AuthResponse(jwtService.generateJwtToken(user.getUsername()), user);
    }

    @PostMapping("/signup")
    public AuthResponse register(@RequestBody AuthRequest req) {
        User user = userService.createUser(req.username, encoder.encode(req.password));
        return new AuthResponse(jwtService.generateJwtToken(user.getUsername()), user);
    }

    private void authenticate(AuthRequest req) {
        var token = new UsernamePasswordAuthenticationToken(req.username, req.password);
        authenticationManager.authenticate(token);
    }

    public static class AuthRequest {
        String username;
        String password;

        public AuthRequest() {
        }

        public AuthRequest(String username, String password) {
            this.username = username;
            this.password = password;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

}
