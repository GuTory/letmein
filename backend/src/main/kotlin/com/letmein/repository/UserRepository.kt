package com.letmein.repository

import com.letmein.model.User
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository : MongoRepository<User, String> {

    fun findByEmail(email: String): Optional<User>

    fun findAllByTeam(team: String): MutableList<User>

    fun findAllByCompany(company: String): MutableList<User>
}