package com.letmein.service

import com.letmein.model.User
import com.letmein.repository.UserRepository
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository,
    private val encoder: BCryptPasswordEncoder
) {
    fun saveUser(user: User) = userRepository.save(user)

    fun updateUser(user: User): User {
        val dbUser = userRepository.findByEmail(user.email)

        if (dbUser.isPresent && !encoder.matches(user.password, dbUser.get().password)) {
            return userRepository.save(user)
        } else {
            throw Exception("User not found")
        }
    }

    fun deleteUser(id: String) = userRepository.deleteById(id)

    fun getAllUsers(): MutableList<User> = userRepository.findAll()

    fun getUserById(id: String) = userRepository.findById(id)

    fun getUserByEmail(email: String) = userRepository.findByEmail(email)

    fun getAllUsersByTeam(team: String) = userRepository.findAllByTeam(team)

    fun getAllUsersByCompany(company: String) = userRepository.findAllByCompany(company)
}