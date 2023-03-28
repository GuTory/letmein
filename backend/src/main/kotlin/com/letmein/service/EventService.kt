package com.letmein.service

import com.letmein.model.Event
import com.letmein.repository.EventRepository
import org.springframework.stereotype.Service

@Service
class EventService (
    private val eventRepository: EventRepository
) {
    fun deleteEvent(id: String) = eventRepository.deleteById(id)

    fun saveEvent(event: Event) = eventRepository.save(event)

    fun getAllEvents() = eventRepository.findAll()

    fun getEventById(id: String) = eventRepository.findById(id)

    fun getEventByName(eventName: String) = eventRepository.findByName(eventName)

    fun getAllEventsByOrganizer(organizer: String) = eventRepository.findAllByOrganizersContains(organizer)

    fun getAllEventsByVenue(venue: String) = eventRepository.findAllByVenueContains(venue)
}