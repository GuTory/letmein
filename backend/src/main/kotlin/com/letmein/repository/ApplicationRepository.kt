package com.letmein.repository

import com.letmein.model.Application
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface ApplicationRepository : MongoRepository<Application, String> {
    //fun findByEvent(eventId: String): Application

    //fun findByUser(userId: String): List<Application>

    //fun findAllByEventNameContains(eventName: String): List<Application>
}