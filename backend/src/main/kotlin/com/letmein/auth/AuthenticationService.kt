package com.letmein.auth

import com.letmein.dto.AuthenticationRequest
import com.letmein.dto.AuthenticationResponse
import com.letmein.dto.RegistrationRequest
import com.letmein.model.User
import com.letmein.jwt.JwtService
import com.letmein.service.UserService
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class AuthenticationService(
    private val userService: UserService,
    private val encoder: PasswordEncoder,
    private val jwtService: JwtService,
    private val authenticationManager: AuthenticationManager
) {

    fun register(registrationRequest: RegistrationRequest): AuthenticationResponse {
        if(userService.getUserByEmail(registrationRequest.email).isPresent)
            throw Exception("User already exists")
        val user = User(
            email = registrationRequest.email,
            password = encoder.encode(registrationRequest.password),
            firstName = registrationRequest.firstName,
            lastName = registrationRequest.lastName,
            company = registrationRequest.company,
            team = registrationRequest.team
        )
        user.roles.add("User")
        userService.saveUser(user)
        return AuthenticationResponse(jwtService.generateToken(user))
    }

    fun login(loginRequest: AuthenticationRequest): AuthenticationResponse {
        authenticationManager.authenticate(
            UsernamePasswordAuthenticationToken(
                loginRequest.email,
                loginRequest.password
            )
        )
        val user = userService.getUserByEmail(loginRequest.email)
        if(user.isPresent)
            return AuthenticationResponse(jwtService.generateToken(user.get()))
        throw Exception("User not found")
    }
}