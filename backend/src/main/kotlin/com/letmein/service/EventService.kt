package com.letmein.service

import com.letmein.model.Event
import com.letmein.repository.EventRepository
import org.springframework.stereotype.Service

@Service
class EventService (
    private val eventRepository: EventRepository
) {
    fun deleteEvent(event: Event) = eventRepository.delete(event)

    fun saveEvent(event: Event) = eventRepository.save(event)

    fun getAllEvents() = eventRepository.findAll()

    fun getEventById(id: String) = eventRepository.findById(id)

    fun getEventByName(eventName: String) = eventRepository.findByName(eventName)

    fun getEventsByOrganizer(organizer: String) = eventRepository.findAllByOrganizersContains(organizer)

    fun getEventsByName(eventName: String) = eventRepository.findAllByNameContains(eventName)

    fun getEventsByVenue(venue: String) = eventRepository.findAllByVenueContains(venue)
}