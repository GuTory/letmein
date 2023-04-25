package com.letmein.service

import com.letmein.dto.EventDTO
import com.letmein.model.Event
import com.letmein.model.User
import com.letmein.repository.ApplicationRepository
import com.letmein.repository.EventRepository
import org.springframework.stereotype.Service

@Service
class EventService(
    private val eventRepository: EventRepository,
    private val userService: UserService, private val applicationRepository: ApplicationRepository
) {
    fun deleteEvent(id: String) {
        val event = eventRepository.findById(id)
        if (event.isEmpty) return

        event.get().Attendees.forEach { user ->
            user.applications.removeIf { it.Event == event.get() }
            user.favoriteEvents?.remove(event.get())
            user.attendedEvents.remove(event.get())
            userService.updateUser(user)
        }
        applicationRepository.findAll().forEach {
            if (it.Event == event.get())
                applicationRepository.deleteById(it.id)
        }
        eventRepository.deleteById(id)
    }

    fun saveEvent(event: EventDTO, publisher: User) {
        val newEvent = Event(
            Name = event.name,
            StartDateTime = event.startDateTime,
            EndDatetime = event.endDateTime,
            EntranceStartTime = event.entranceStartTime,
            EntranceEndTime = event.entranceEndTime,
            RegistrationEndTime = event.registrationEndTime,
            Venue = event.venue,
            Description = event.description,
            AttendeeLimit = event.attendeeLimit
        )
        newEvent.Organizers.add(publisher)
        eventRepository.save(newEvent)
    }

    fun updateEvent(event: Event) = eventRepository.save(event)

    fun getAllEvents(): MutableList<Event> = eventRepository.findAll()

    fun getEventById(id: String) = eventRepository.findById(id)

    fun getEventByName(eventName: String) = eventRepository.findByName(eventName)

    fun getAllEventsByOrganizer(organizer: String) = eventRepository.findAllByOrganizersContains(organizer)

    fun getAllEventsByVenue(venue: String) = eventRepository.findAllByVenueContains(venue)
}