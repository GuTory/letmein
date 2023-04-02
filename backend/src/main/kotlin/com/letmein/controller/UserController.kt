package com.letmein.controller

import com.letmein.model.User
import com.letmein.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("api/users")
class UserController(
    private val userService: UserService,
    private val bCryptPasswordEncoder: BCryptPasswordEncoder
) {

    @PostMapping("/")
    fun saveUser(@ModelAttribute user: User): ResponseEntity<User> {
        user.password = bCryptPasswordEncoder.encode(user.password)
        return ResponseEntity(userService.saveUser(user), HttpStatus.CREATED)
    }

    @PutMapping("/")
    fun updateUser(@ModelAttribute user: User): ResponseEntity<User> {
        val userFromDb = userService.getUserById(user.id)
        if (userFromDb.isPresent && userFromDb.get().password != user.password) {
            user.password = bCryptPasswordEncoder.encode(user.password)
        }
        return ResponseEntity(userService.saveUser(user), HttpStatus.OK)
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
        return if (userByEmail.isPresent){
            ResponseEntity(userByEmail.get(), HttpStatus.OK)
        } else {
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @GetMapping("/team/{team}")
    fun getAllUsersByTeam(@PathVariable team: String): ResponseEntity<List<User>> {
        val usersByTeam = userService.getAllUsersByTeam(team)
        return if(usersByTeam.isEmpty()){
            return ResponseEntity(HttpStatus.NOT_FOUND)
        } else {
            ResponseEntity(usersByTeam, HttpStatus.OK)
        }
    }

    @GetMapping("/company/{company}")
    fun getAllUsersByCompany(@PathVariable company: String): ResponseEntity<List<User>> {
        val usersByCompany = userService.getAllUsersByCompany(company)
        return if(usersByCompany.isEmpty()){
            return ResponseEntity(HttpStatus.NOT_FOUND)
        } else {
            ResponseEntity(usersByCompany, HttpStatus.OK)
        }
    }
}