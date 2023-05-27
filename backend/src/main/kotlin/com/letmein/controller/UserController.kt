package com.letmein.controller

import com.letmein.auth.AuthenticationService
import com.letmein.dto.AuthenticationResponse
import com.letmein.dto.RegistrationRequest
import com.letmein.model.User
import com.letmein.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("api/users")
class UserController(
    private val userService: UserService,
    private val authenticationService: AuthenticationService
) {

    @PostMapping("/")
    fun saveUser(@ModelAttribute user: RegistrationRequest): ResponseEntity<AuthenticationResponse> {
        return try {
            val response = authenticationService.register(user)
            ResponseEntity(response, HttpStatus.CREATED)
        } catch (e: Exception) {
            ResponseEntity(HttpStatus.CONFLICT)
        }
    }

    @PutMapping("/")
    fun updateUser(@ModelAttribute user: User): ResponseEntity<User> {
        return try {
            userService.updateUser(user)
            ResponseEntity(user, HttpStatus.OK)
        } catch (e: Exception) {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @DeleteMapping("/{id}")
    fun deleteUser(@PathVariable id: String): ResponseEntity<Unit> {
        userService.deleteUser(id)
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }

    @GetMapping("/")
    fun getUsers(): List<User> = userService.getAllUsers()

    @GetMapping("/{id}")
    fun getUserById(@PathVariable id: String): ResponseEntity<User> {
        val userById = userService.getUserById(id)
        return if (userById.isPresent) ResponseEntity(
            userById.get(),
            HttpStatus.OK
        ) else ResponseEntity(HttpStatus.NOT_FOUND)
    }

    @GetMapping("/email/{email}")
    fun getUserByEmail(@PathVariable email: String): ResponseEntity<User> {
        val userByEmail = userService.getUserByEmail(email)
        return if (userByEmail.isPresent) {
            ResponseEntity(userByEmail.get(), HttpStatus.OK)
        } else {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @GetMapping("/team/{team}")
    fun getAllUsersByTeam(@PathVariable team: String): ResponseEntity<List<User>> {
        val usersByTeam = userService.getAllUsersByTeam(team)
        return if (usersByTeam.isEmpty()) {
            return ResponseEntity(HttpStatus.NOT_FOUND)
        } else {
            ResponseEntity(usersByTeam, HttpStatus.OK)
        }
    }

    @GetMapping("/company/{company}")
    fun getAllUsersByCompany(@PathVariable company: String): ResponseEntity<List<User>> {
        val usersByCompany = userService.getAllUsersByCompany(company)
        return if (usersByCompany.isEmpty()) {
            return ResponseEntity(HttpStatus.NOT_FOUND)
        } else {
            ResponseEntity(usersByCompany, HttpStatus.OK)
        }
    }
}