package sticker.auth.jwt;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import sticker.service.UserService;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JWTAuthTokenFilter extends OncePerRequestFilter {

    private final UserService userService;
    private final JWTService jwtService;

    public JWTAuthTokenFilter(UserService userService, JWTService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String jwt = getJwt(request);
            if (jwt != null && jwtService.validateJwtToken(jwt)) {
                var username = jwtService.getUserNameFromJwtToken(jwt);

                var userDetails = userService.loadUserByUsername(username);
                var authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception ignored) {
        }
        filterChain.doFilter(request, response);
    }

    private String getJwt(HttpServletRequest request) {
        var authHeader = request.getHeader("Authorization");

        String BEARER = "Bearer";
        return authHeader != null && authHeader.startsWith(BEARER) ?
                authHeader.substring(BEARER.length()).trim() :
                null;
    }
}
