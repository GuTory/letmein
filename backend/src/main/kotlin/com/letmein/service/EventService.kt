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
    private val userService: UserService,
    private val imageService: ImageService,
    private val applicationRepository: ApplicationRepository
) {
    fun deleteEvent(id: String) {
        val event = eventRepository.findById(id)
        if (event.isEmpty) return

        event.get().attendees.forEach { user ->
            user.applications.removeIf { it.event == event.get() }
            user.favoriteEvents?.remove(event.get())
            user.attendedEvents.remove(event.get())
            userService.updateUser(user)
        }
        applicationRepository.findAll().forEach {
            if (it.event == event.get())
                applicationRepository.deleteById(it.id)
        }
        imageService.deleteImage(event.get().imagePath ?: "")
        eventRepository.deleteById(id)
    }

    fun saveEvent(event: EventDTO, publisher: User) {
        val newEvent = Event(
            name = event.name,
            startDateTime = event.startDateTime,
            endDatetime = event.endDateTime,
            entranceStartTime = event.entranceStartTime,
            entranceEndTime = event.entranceEndTime,
            registrationEndTime = event.registrationEndTime,
            venue = event.venue,
            description = event.description,
            attendeeLimit = event.attendeeLimit
        )
        newEvent.organizers.add(publisher)
        if (event.image != null) {
            try {
                newEvent.imagePath = imageService.saveImage(
                        event.image!!,
                        event.name + "_" + System.currentTimeMillis()
                    )
            } catch (e: Exception) {
                println(e.message)
                newEvent.imagePath = ""
            }
        } else {
            newEvent.imagePath = ""
        }
        eventRepository.save(newEvent)
    }

    fun updateEvent(event: Event) = eventRepository.save(event)

    fun getAllEvents(): MutableList<Event> = eventRepository.findAll()

    fun getEventById(id: String) = eventRepository.findById(id)

    fun getEventByName(eventName: String) = eventRepository.findByName(eventName)

    fun getAllEventsByOrganizer(organizer: String) = eventRepository.findAllByOrganizersContains(organizer)

    fun getAllEventsByVenue(venue: String) = eventRepository.findAllByVenueContains(venue)
}