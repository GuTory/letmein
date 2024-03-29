package com.letmein.jwt

import com.letmein.service.MyUserDetailsService
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class JwtAuthenticationFilter(
    private val userDetailsService: MyUserDetailsService,
    private val jwtService: JwtService
) : OncePerRequestFilter() {

    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        val authHeader = request.getHeader("Authorization")
        val bearer = "Bearer "
        if (authHeader == null || !authHeader.startsWith(bearer)) {
            filterChain.doFilter(request, response)
            return
        }
        val authToken = authHeader.substring(bearer.length)
        val userEmail = jwtService.extractUserNameFromToken(authToken)
        if (!userEmail.isNullOrEmpty() && SecurityContextHolder.getContext().authentication == null) {
            try {
                val userDetails = userDetailsService.loadUserByUsername(userEmail)
                if (jwtService.isTokenValid(authToken, userDetails)) {
                    val authentication = UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.authorities)
                    authentication.details = WebAuthenticationDetailsSource().buildDetails(request)
                    SecurityContextHolder.getContext().authentication = authentication
                }
            } catch (e: Exception) {
                filterChain.doFilter(request, response)
                return
            }
        }
        filterChain.doFilter(request, response)
    }
}