package com.letmein.controller

import com.letmein.model.Event
import com.letmein.service.EventService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/events")
class EventController (
    private val eventService: EventService
){
    @PostMapping("/")
    fun createEvent(event: Event) = ResponseEntity(eventService.saveEvent(event), HttpStatus.CREATED)

    @PutMapping("/")
    fun updateEvent(event: Event) = ResponseEntity(eventService.saveEvent(event), HttpStatus.OK)

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
    fun getEventByName(@RequestParam name: String) = eventService.getEventByName(name)

    @GetMapping("/organizer")
    fun getAllEventsByOrganizer(@RequestParam organizer: String) = eventService.getAllEventsByOrganizer(organizer)

    @GetMapping("/venue")
    fun getAllEventsByVenue(@RequestParam venue: String) = eventService.getAllEventsByVenue(venue)

    //TODO: megnézni, hogy a querybe hogyan kell helyesen paraméterezni, mert ezek átfedhetnek
}