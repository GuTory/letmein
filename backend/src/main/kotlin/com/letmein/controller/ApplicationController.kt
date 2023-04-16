package com.letmein.controller

import com.letmein.model.Application
import com.letmein.model.Event
import com.letmein.model.User
import com.letmein.service.ApplicationService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/applications")
class ApplicationController (
    private val applicationService: ApplicationService
){
    @PostMapping("/")
    fun createApplication(@ModelAttribute application: Application) = ResponseEntity(applicationService.saveApplication(application), HttpStatus.CREATED)

    @PutMapping("/")
    fun updateApplication(@ModelAttribute application: Application) = ResponseEntity(applicationService.saveApplication(application), HttpStatus.OK)

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
    fun getAllApplicationsByEventNameContains(@PathVariable eventName: String) = applicationService.getAllApplicationsByEventNameContains(eventName)

}