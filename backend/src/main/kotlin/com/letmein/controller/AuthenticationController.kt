package com.letmein.controller

import com.letmein.auth.AuthenticationResponse
import com.letmein.auth.LoginRequestDTO
import com.letmein.auth.RegistrationRequestDTO
import com.letmein.model.User
import com.letmein.service.AuthenticationService
import com.letmein.service.MyUserDetailsService
import com.letmein.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
class AuthenticationController(
    private val userDetailsService: MyUserDetailsService,
    private val userService: UserService,
    private val authenticationService: AuthenticationService
) {

    @GetMapping("/login")
    fun checkLogin(@RequestBody user: LoginRequestDTO): ResponseEntity<Unit> {
        println("checkLogin")
        println(user.email)
        println(user.password)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/login")
    fun login(@RequestBody user: LoginRequestDTO): ResponseEntity<AuthenticationResponse> {
        println("login")
        return ResponseEntity(authenticationService.login(user), HttpStatus.OK)
    }

    @PostMapping("/register")
    fun register(@RequestBody user: RegistrationRequestDTO): ResponseEntity<AuthenticationResponse>{
        println("register")
        return ResponseEntity(authenticationService.reginster(user), HttpStatus.CREATED)
    }
}