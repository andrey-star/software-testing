package sticker.auth.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JWTService {

    @Value("${auth.jwt.secret}")
    String jwtSecret;

    @Value("${auth.jwt.expiration}")
    long jwtExpirationSeconds;

    public String generateJwtToken(String username) {
        var date = new Date();
        return Jwts.builder()
                   .setSubject(username)
                   .setIssuedAt(date)
                   .setExpiration(new Date(date.getTime() + jwtExpirationSeconds * 1000))
                   .signWith(SignatureAlgorithm.HS512, jwtSecret)
                   .compact();
    }

    private Claims getClaimsFromToken(String authToken) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken).getBody();
    }

    public boolean validateJwtToken(String authToken) {
        try {
            getClaimsFromToken(authToken);
            return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    public String getUserNameFromJwtToken(String token) {
        return getClaimsFromToken(token).getSubject();
    }
}
