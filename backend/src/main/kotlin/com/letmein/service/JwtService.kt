package com.letmein.service

import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import io.jsonwebtoken.io.Decoders
import io.jsonwebtoken.security.Keys
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Service
import java.security.Key
import java.util.*
import java.util.function.Function
import kotlin.collections.HashMap

@Service
class JwtService {

    private val privateKey = "26452948404D6351655468576D5A7134743777217A25432A462D4A614E645267"

    public fun generateToken(userDetails: UserDetails, claims: Map<String, Any> = HashMap()): String {
        return Jwts
            .builder()
            .setClaims(claims)
            .setSubject(userDetails.username)
            .setIssuedAt(Date(System.currentTimeMillis()))
            .setExpiration(Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24))
            .signWith(getSignInKey(), SignatureAlgorithm.HS256)
            .compact()
    }

    fun isTokenValid(token: String, userDetails: UserDetails): Boolean {
        val userName = extractUserNameFromToken(token)
        return userName== userDetails.username && !isTokenExpired(token)
    }

    fun isTokenExpired(token: String): Boolean {
        return extractExpiration(token).before(Date())
    }

    fun extractExpiration(token: String): Date {
        return extractClaims(token) { it.expiration }
    }

    fun extractUserNameFromToken(token: String): String {
        return extractClaims(token) { it.subject }
    }

    fun <T> extractClaims(token: String, resolver: Function<Claims, T>): T {
        val claims = extractAllClaims(token)
        return resolver.apply(claims)
    }

    private fun extractAllClaims(token: String): Claims {
        return Jwts.parserBuilder()
            .setSigningKey(getSignInKey())
            .build()
            .parseClaimsJws(token)
            .body
    }

    private fun getSignInKey(): Key {
        return Keys.hmacShaKeyFor(
            Decoders.BASE64.decode(privateKey)
        );
    }
}