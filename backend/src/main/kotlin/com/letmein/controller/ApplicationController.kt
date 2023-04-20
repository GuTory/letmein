package com.letmein.controller

import com.letmein.dto.ApplicationDTO
import com.letmein.model.Application
import com.letmein.model.Event
import com.letmein.model.User
import com.letmein.service.ApplicationService
import com.letmein.service.EventService
import com.letmein.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/applications")
class ApplicationController(
    private val applicationService: ApplicationService,
    private val userService: UserService,
    private val eventService: EventService
) {
    @PostMapping("/")
    fun createApplication(@RequestBody application: ApplicationDTO): ResponseEntity<Unit> {
        val user = userService.getUserByEmail(application.username)
        val event = eventService.getEventById(application.eventid)
        if (event.isEmpty || user.isEmpty || !event.get().CanRegister())
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        val newApplication = Application (
            event.get(),
            user.get(),
            application.status,
            application.paymentmethod
        )
        applicationService.saveApplication(newApplication)
        return ResponseEntity(HttpStatus.CREATED)
    }

    @PutMapping("/")
    fun updateApplication(@RequestBody application: Application) =
        ResponseEntity(applicationService.saveApplication(application), HttpStatus.OK)

    @DeleteMapping("/{id}")
    fun deleteApplication(@PathVariable id: String): ResponseEntity<Unit> {
        applicationService.deleteApplication(id)
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }

    @GetMapping("/")
    fun getAllapplications(): MutableList<Application> = applicationService.getAllApplications()

    @GetMapping("/{id}")
    fun getApplicationById(@PathVariable id: String) = applicationService.getApplicationById(id)

    @GetMapping("/event")
    fun getAllApplicationsyEvent(@ModelAttribute event: Event) = applicationService.getAllApplicationsByEvent(event)

    @GetMapping("/user")
    fun getAllApplicationsyUser(@ModelAttribute user: User) = applicationService.getAllApplicationsByUser(user)

    @GetMapping("/eventname/{eventName}")
    fun getAllApplicationsByEventNameContains(@PathVariable eventName: String) =
        applicationService.getAllApplicationsByEventNameContains(eventName)

}