package com.letmein.controller

import com.letmein.model.LoginEntity
import com.letmein.model.User
import com.letmein.service.MyUserDetailsService
import com.letmein.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
class LoginController(
    private val userDetailsService: MyUserDetailsService,
    private val userService: UserService,
    private val encoder: BCryptPasswordEncoder
) {

    @GetMapping("/login")
    fun checkLogin(@RequestBody user: LoginEntity): ResponseEntity<Unit> {
        println("checkLogin")
        println(user.email)
        println(user.password)
        return ResponseEntity(HttpStatus.OK)
    }

    @PostMapping("/login")
    fun login(@RequestBody user: LoginEntity): ResponseEntity<User> {
        println("login")
        try {
            val userDetails = userDetailsService.loadUserByUsername(user.email)
            if (
            //encoder.matches(password, userDetails.password)
                user.password == userDetails.password
            ) {
                val userFromDB = userService.getUserByEmail(user.email).get()
                return ResponseEntity(userFromDB, HttpStatus.OK)
            }
        } catch (e: Exception) {
            return ResponseEntity(HttpStatus.UNAUTHORIZED)
        }
        return ResponseEntity(HttpStatus.UNAUTHORIZED)
    }

    @PostMapping("/register")
    fun register(@RequestBody user: User){
        println("register")
    }
}