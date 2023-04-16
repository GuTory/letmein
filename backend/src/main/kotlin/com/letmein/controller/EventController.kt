package com.letmein.controller

import com.letmein.dto.EventDTO
import com.letmein.jwt.JwtService
import com.letmein.model.Event
import com.letmein.service.EventService
import com.letmein.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.time.LocalDate
import java.time.format.DateTimeFormatter

@RestController
@RequestMapping("/api/events")
class EventController (
    private val eventService: EventService,
    private val jwtService: JwtService,
    private val userService: UserService
){
    @PostMapping("/")
    fun createEvent(@RequestBody event: EventDTO,
                    @RequestHeader("Authorization") token: String
    ): ResponseEntity<HttpStatus> {
        val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")
        val newEvent = Event(
            event.name,
            event.startDateTime,
            event.endDateTime,
            event.entranceStartTime,
            event.entranceEndTime,
            event.registrationEndTime,
            event.venue,
            event.description,
            event.attendeeLimit
        )
        val realtoken = token.substring(7)
        val username = jwtService.extractUserNameFromToken(realtoken)!!
        val publisher = userService.getUserByEmail(username).get()
        newEvent.Organizers.add(publisher)
        eventService.saveEvent(newEvent)
        return ResponseEntity(HttpStatus.CREATED)
    } //= ResponseEntity(eventService.saveEvent(event), HttpStatus.CREATED)

    @PutMapping("/")
    fun updateEvent(@ModelAttribute event: Event) = ResponseEntity(eventService.saveEvent(event), HttpStatus.OK)

    @DeleteMapping("/{id}")
    fun deleteEvent(@PathVariable id: String): ResponseEntity<Unit> {
        eventService.deleteEvent(id)
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }

    @GetMapping("/")
    fun getAllEvents(): MutableList<Event> = eventService.getAllEvents()

    @GetMapping("/{id}")
    fun getEventById(@PathVariable id: String) = eventService.getEventById(id)

    @GetMapping("/name")
    fun getEventByName(@ModelAttribute name: String) = eventService.getEventByName(name)

    @GetMapping("/organizer")
    fun getAllEventsByOrganizer(@ModelAttribute organizer: String) = eventService.getAllEventsByOrganizer(organizer)

    @GetMapping("/venue")
    fun getAllEventsByVenue(@ModelAttribute venue: String) = eventService.getAllEventsByVenue(venue)
}