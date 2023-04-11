package com.letmein.service

import com.letmein.auth.AuthenticationResponse
import com.letmein.auth.LoginRequestDTO
import com.letmein.auth.RegistrationRequestDTO
import com.letmein.model.User
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class AuthenticationService(
    private val userService: UserService,
    private val encoder: BCryptPasswordEncoder,
    private val jwtService: JwtService,
    private val authenticationManager: AuthenticationManager
) {

    fun reginster(registartionRequest: RegistrationRequestDTO): AuthenticationResponse {
        if(userService.getUserByEmail(registartionRequest.email).isPresent)
            throw Exception("User already exists")
        val user = User(
            email = registartionRequest.email,
            password = encoder.encode(registartionRequest.password),
            firstName = registartionRequest.firstName,
            lastName = registartionRequest.lastName,
            company = registartionRequest.company,
            team = registartionRequest.team
        )
        user.roles.add("User")
        userService.saveUser(user)
        return AuthenticationResponse(jwtService.generateToken(user))
    }

    fun login(loginRequest: LoginRequestDTO): AuthenticationResponse {
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