package com.letmein.repository

import com.letmein.model.Event
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface EventRepository : MongoRepository<Event, String> {
    fun findByName(eventName: String): Event

    fun findAllByVenueContains(venue: String): MutableList<Event>

    fun findAllByOrganizersContains(organizer: String): MutableList<Event>
}