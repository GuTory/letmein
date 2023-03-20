package com.letmein.service

import com.letmein.repository.ApplicationRepository
import org.springframework.stereotype.Service

@Service
class ApplicationService(
    private val applicationRepository: ApplicationRepository
){
    fun getAllApplications() = applicationRepository.findAll()

    fun getApplicationById(id: String) = applicationRepository.findById(id)

    //fun getApplicationsByEventId(eventId: String) = applicationRepository.findByEvent(eventId)

    //fun getApplicationsByUserId(userId: String) = applicationRepository.findByUser(userId)

    //fun getApplicationsByEventName(eventName: String) = applicationRepository.findAllByEventNameContains(eventName)

}