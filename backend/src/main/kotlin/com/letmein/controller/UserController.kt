package com.letmein.controller

import com.letmein.model.User
import com.letmein.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("api/users")
class UserController (
    private val userService: UserService
) {
    //TODO: DTO? MODEL? WHAT?
    @PostMapping("/")
    fun saveUser(user: User) : ResponseEntity<User> = ResponseEntity(userService.saveUser(user), HttpStatus.CREATED)

    @PutMapping("/")
    fun updateUser(user: User) : ResponseEntity<User> = ResponseEntity(userService.saveUser(user), HttpStatus.OK)

    @DeleteMapping("/{id}")
    fun deleteUser(@PathVariable id: String): ResponseEntity<Unit> {
        userService.deleteUser(id)
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }

    @GetMapping("/")
    fun getUsers(): List<User> = userService.getAllUsers()

    @GetMapping("/{id}")
    fun getUserById(@PathVariable id: String): Optional<User> = userService.getUserById(id)

    @GetMapping("/email/{email}")
    fun getUserByEmail(@PathVariable email: String): Optional<User> = userService.getUserByEmail(email)

    @GetMapping("/team")
    fun getUsersByTeam(@RequestParam team: String): List<User> = userService.getAllUsersByTeam(team)

    @GetMapping("/company")
    fun getUsersByCompany(@RequestParam company: String): List<User> = userService.getAllUsersByCompany(company)
}