package com.letmein.config

import com.letmein.jwt.JwtAuthenticationFilter
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.authentication.AuthenticationProvider
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import org.springframework.security.web.util.matcher.AntPathRequestMatcher
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource


@Configuration
@EnableWebSecurity
class SecurityConfig(
    private val jwtAuthFilter: JwtAuthenticationFilter,
    private val authenticationProvider: AuthenticationProvider,
) {

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        val corsConfig = CorsConfiguration()
        corsConfig.allowedOrigins = listOf("http://localhost:4200")
        corsConfig.addAllowedHeader("*")
        corsConfig.addAllowedMethod(HttpMethod.GET)
        corsConfig.addAllowedMethod(HttpMethod.PUT)
        corsConfig.addAllowedMethod(HttpMethod.POST)
        corsConfig.addAllowedMethod(HttpMethod.DELETE)
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**",corsConfig)

        return http
            .authorizeHttpRequests()
            .requestMatchers(
                AntPathRequestMatcher("/api/v1/auth/**")
            )
            .permitAll()
            .anyRequest()
            .authenticated()
            .and()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .csrf().disable()
            .cors().configurationSource(source)
            .and()
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter::class.java)
            .build()
    }
}