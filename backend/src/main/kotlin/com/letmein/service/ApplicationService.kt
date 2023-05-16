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
        event.Attendees.add(user)
        user.applications.add(newApplication)
        applicationRepository.save(newApplication)
        eventService.updateEvent(event)
        userService.saveUser(user)
        return newApplication
    }

    fun deleteApplication(id: String) {
        val application = applicationRepository.findById(id)
        application.get().Event.Attendees.remove(application.get().User)
        application.get().User.applications.remove(application.get())
        eventService.updateEvent(application.get().Event)
        userService.saveUser(application.get().User)
        applicationRepository.deleteById(id)
    }

    fun getAllApplications(): MutableList<Application> = applicationRepository.findAll()

    fun getApplicationById(id: String) = applicationRepository.findById(id)

    fun getAllApplicationsByEvent(event: Event) = applicationRepository.findAllByEvent(event)

    fun getAllApplicationsByUser(user: User) = applicationRepository.findAllByUser(user)

    fun getAllApplicationsByEventNameContains(eventName: String) = applicationRepository.findAllByEventNameContains(eventName)
}