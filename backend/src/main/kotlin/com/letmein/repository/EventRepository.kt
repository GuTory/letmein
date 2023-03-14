package com.letmein.repository

import com.letmein.model.Event
import org.springframework.data.mongodb.repository.MongoRepository

interface EventRepository : MongoRepository<Event, String> {
}