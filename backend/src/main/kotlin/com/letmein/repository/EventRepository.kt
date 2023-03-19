package com.letmein.repository

import com.letmein.model.Event
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface EventRepository : MongoRepository<Event, String> {
}