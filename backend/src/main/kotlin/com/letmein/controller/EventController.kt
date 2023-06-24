package com.letmein.controller

import com.letmein.dto.EventDTO
import com.letmein.jwt.JwtService
import com.letmein.model.Event
import com.letmein.service.EventService
import com.letmein.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("/api/events")
class EventController (
    private val eventService: EventService,
    private val jwtService: JwtService,
    private val userService: UserService
){
    @PostMapping("/")
    fun createEvent(@RequestBody event: EventDTO,
                    @RequestHeader("Authorization") token: String,
                    @RequestParam("event.image", required = false) image: MultipartFile?
    ): ResponseEntity<HttpStatus> {
        val realtoken = token.substring(7)
        val username = jwtService.extractUserNameFromToken(realtoken)!!
        val publisher = userService.getUserByEmail(username).get()
        eventService.saveEvent(event, publisher)
        return ResponseEntity(HttpStatus.CREATED)
    }

    @PutMapping("/")
    fun updateEvent(@RequestBody event: Event): ResponseEntity<HttpStatus> {
        return try {
            val eventToUpdate = eventService.getEventById(event.id).get()
            eventToUpdate.let {
                it.name = event.name
                it.startDateTime = event.startDateTime
                it.endDatetime = event.endDatetime
                it.entranceStartTime = event.entranceStartTime
                it.entranceEndTime = event.entranceEndTime
                it.registrationEndTime = event.registrationEndTime
                it.venue = event.venue
                it.description = event.description
                it.attendeeLimit = event.attendeeLimit
            }
            ResponseEntity.ok().build()
        } catch (e: Exception) {
            ResponseEntity.notFound().build()
        }
    }

    @DeleteMapping("/{id}")
    fun deleteEvent(@PathVariable id: String): ResponseEntity<Unit> {
        eventService.deleteEvent(id)
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }

    @GetMapping("/")
    fun getAllEvents(): MutableList<Event> = eventService.getAllEvents()

    @GetMapping("/{Id}")
    fun getEventById(@PathVariable Id: String) = eventService.getEventById(Id)

    @GetMapping("/name")
    fun getEventByName(@ModelAttribute name: String) = eventService.getEventByName(name)

    @GetMapping("/organizer")
    fun getAllEventsByOrganizer(@ModelAttribute organizer: String) = eventService.getAllEventsByOrganizer(organizer)

    @GetMapping("/venue")
    fun getAllEventsByVenue(@ModelAttribute venue: String) = eventService.getAllEventsByVenue(venue)
}