package com.letmein.controller

import com.letmein.model.Event
import com.letmein.service.EventService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/events")
class EventController (
    private val eventService: EventService
){
    @PostMapping("/")
    fun createEvent(@ModelAttribute event: Event) = ResponseEntity(eventService.saveEvent(event), HttpStatus.CREATED)

    @PutMapping("/")
    fun updateEvent(@ModelAttribute event: Event) = ResponseEntity(eventService.saveEvent(event), HttpStatus.OK)

    @DeleteMapping("/{id}")
    fun deleteEvent(@PathVariable id: String): ResponseEntity<Unit> {
        eventService.deleteEvent(id)
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }

    @GetMapping("/")
    fun getAllEvents() = eventService.getAllEvents()

    @GetMapping("/{id}")
    fun getEventById(@PathVariable id: String) = eventService.getEventById(id)

    @GetMapping("/name")
    fun getEventByName(@ModelAttribute name: String) = eventService.getEventByName(name)

    @GetMapping("/organizer")
    fun getAllEventsByOrganizer(@ModelAttribute organizer: String) = eventService.getAllEventsByOrganizer(organizer)

    @GetMapping("/venue")
    fun getAllEventsByVenue(@ModelAttribute venue: String) = eventService.getAllEventsByVenue(venue)
}