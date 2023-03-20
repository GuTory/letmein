package com.letmein.service

import com.letmein.model.User
import com.letmein.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService (
    private val userRepository: UserRepository
){
    fun saveUser(user: User) = userRepository.save(user)

    fun deleteUser(user: User) = userRepository.delete(user)

    fun getAllUsers() = userRepository.findAll()

    fun getUserById(id: String) = userRepository.findById(id)

    fun getUserByEmail(email: String) = userRepository.findByEmail(email)

    fun getUsersByTeam(team: String) = userRepository.findAllByTeam(team)

    fun getUsersByCompany(company: String) = userRepository.findAllByCompany(company)
}