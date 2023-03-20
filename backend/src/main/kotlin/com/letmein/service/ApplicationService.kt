package com.letmein.service

import com.letmein.model.Event
import com.letmein.model.User
import com.letmein.repository.ApplicationRepository
import org.springframework.stereotype.Service

@Service
class ApplicationService(
    private val applicationRepository: ApplicationRepository
){
    fun getAllApplications() = applicationRepository.findAll()

    fun getApplicationById(id: String) = applicationRepository.findById(id)

    fun getApplicationsByEvent(event: Event) = applicationRepository.findByEvent(event)

    fun getApplicationsByUserId(user: User) = applicationRepository.findAllByUser(user)

    fun getApplicationsByEventNameContains(eventName: String) = applicationRepository.findAllByEventNameContains(eventName)
}