package com.letmein.controller

import com.letmein.model.User
import com.letmein.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
@RequestMapping("api/users")
class UserController (
    private val userService: UserService
) {
    //TODO: DTO? MODEL? WHAT?
    @PostMapping("/")
    fun saveUser(user: User) : ResponseEntity<User> {
        userService.saveUser(user)
        return ResponseEntity(user, HttpStatus.CREATED)
    }

    @PutMapping("/")
    fun updateUser(user: User) : ResponseEntity<User>{
        userService.saveUser(user)
        return ResponseEntity(user, HttpStatus.OK)
    }

    @DeleteMapping("/{id}")
    fun deleteUser(
        @PathVariable id: String
    ): ResponseEntity<Unit> {
        userService.getUserById(id).ifPresent {
            userService.deleteUser(it)
        }
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }

    @GetMapping("/")
    fun getUsers(): List<User> {
        return userService.getAllUsers()
    }

    @GetMapping("/{id}")
    fun getUserById(
        @PathVariable id: String
    ): Optional<User> {
        return userService.getUserById(id)
    }

    @GetMapping("/email/{email}")
    fun getUserByEmail(
        @PathVariable email: String
    ): Optional<User> {
        return userService.getUserByEmail(email)
    }

    @GetMapping("/team/{team}")
    fun getUsersByTeam(
        @PathVariable team: String
    ): List<User> {
        return userService.getUsersByTeam(team)
    }

    @GetMapping("/company/{company}")
    fun getUsersByCompany(
        @PathVariable company: String
    ): List<User> {
        return userService.getUsersByCompany(company)
    }
}