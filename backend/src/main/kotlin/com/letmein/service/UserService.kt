package com.letmein.service

import com.letmein.model.User
import com.letmein.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService (
    private val userRepository: UserRepository
){
    fun saveUser(user: User) = userRepository.save(user)

    fun deleteUser(id: String) = userRepository.deleteById(id)

    fun getAllUsers() = userRepository.findAll()

    fun getUserById(id: String) = userRepository.findById(id)

    fun getUserByEmail(email: String) = userRepository.findByEmail(email)

    fun getAllUsersByTeam(team: String) = userRepository.findAllByTeam(team)

    fun getAllUsersByCompany(company: String) = userRepository.findAllByCompany(company)
}