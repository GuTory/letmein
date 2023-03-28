package com.letmein.service

import com.letmein.model.Application
import com.letmein.model.Event
import com.letmein.model.User
import com.letmein.repository.ApplicationRepository
import org.springframework.stereotype.Service

@Service
class ApplicationService(
    private val applicationRepository: ApplicationRepository
){
    fun saveApplication(application: Application) = applicationRepository.save(application)

    fun deleteApplication(id: String) = applicationRepository.deleteById(id)

    fun getAllApplications() = applicationRepository.findAll()

    fun getApplicationById(id: String) = applicationRepository.findById(id)

    fun getAllApplicationsByEvent(event: Event) = applicationRepository.findAllByEvent(event)

    fun getAllApplicationsByUser(user: User) = applicationRepository.findAllByUser(user)

    fun getAllApplicationsByEventNameContains(eventName: String) = applicationRepository.findAllByEventNameContains(eventName)
}