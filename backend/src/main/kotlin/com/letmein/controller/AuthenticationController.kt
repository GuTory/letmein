package com.letmein.controller

import com.letmein.dto.AuthenticationResponse
import com.letmein.dto.AuthenticationRequest
import com.letmein.dto.RegistrationRequest
import com.letmein.auth.AuthenticationService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/auth")
class AuthenticationController(
    private val authenticationService: AuthenticationService
) {

    @PostMapping("/authenticate")
    fun login(
        @RequestBody user: AuthenticationRequest
    ): ResponseEntity<AuthenticationResponse> {
        println("login")
        return try {
            val response = authenticationService.login(user)
            ResponseEntity(response, HttpStatus.OK)
        } catch (e: Exception) {
            ResponseEntity(HttpStatus.UNAUTHORIZED)
        }
    }

    @PostMapping("/register")
    fun register(
        @RequestBody user: RegistrationRequest
    ): ResponseEntity<AuthenticationResponse> {
        return try {
            val response = authenticationService.register(user)
            ResponseEntity(response, HttpStatus.CREATED)
        } catch (e: Exception) {
            ResponseEntity(HttpStatus.CONFLICT)
        }
    }
}