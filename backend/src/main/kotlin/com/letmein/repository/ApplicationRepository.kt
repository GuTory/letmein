package com.letmein.repository

import com.letmein.model.Application
import com.letmein.model.Event
import com.letmein.model.User
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface ApplicationRepository : MongoRepository<Application, String> {
    fun findByEvent(event: Event): Application

    fun findAllByUser(user: User): List<Application>

    fun findAllByEventNameContains(eventName: String): List<Application>
}