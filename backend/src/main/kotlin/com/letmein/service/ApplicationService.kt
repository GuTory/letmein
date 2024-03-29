package com.letmein.service

import com.letmein.dto.ApplicationDTO
import com.letmein.model.Application
import com.letmein.model.Event
import com.letmein.model.User
import com.letmein.repository.ApplicationRepository
import org.springframework.stereotype.Service

@Service
class ApplicationService(
    private val applicationRepository: ApplicationRepository,
    private val userService: UserService,
    private val eventService: EventService
){
    fun saveApplication(application: ApplicationDTO): Application {
        val event = eventService.getEventById(application.eventId).get()
        val user = userService.getUserByEmail(application.username).get()
        val newApplication = Application(
            event,
            user,
            application.status,
            application.paymentmethod
        )
        event.attendees.add(user)
        user.applications.add(newApplication)
        applicationRepository.save(newApplication)
        eventService.updateEvent(event)
        userService.saveUser(user)
        return newApplication
    }

    fun deleteApplication(application: ApplicationDTO) {
        println("deleting application")
        val applications = applicationRepository.findAll()
        applications.forEach {app ->
            if(app.event.id == application.eventId && app.user.email == application.username){
                app.event.attendees.remove(app.user)
                app.user.applications.remove(app)
                eventService.updateEvent(app.event)
                println("event updated")
                userService.saveUser(app.user)
                applicationRepository.deleteById(app.id)
            }
        }
    }

    fun getAllApplications(): MutableList<Application> = applicationRepository.findAll()

    fun getApplicationById(id: String) = applicationRepository.findById(id)

    fun getAllApplicationsByEvent(event: Event) = applicationRepository.findAllByEvent(event)

    fun getAllApplicationsByUser(user: User) = applicationRepository.findAllByUser(user)

    fun getAllApplicationsByEventNameContains(eventName: String) = applicationRepository.findAllByEventNameContains(eventName)
}