package com.letmein.controller

import com.letmein.model.Event
import com.letmein.service.EventService
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller

@Controller
class WebSocketController(
    private val eventService: EventService,
) {

    @MessageMapping("/hello")
    @SendTo("/topic/messages")
    fun greeting(message: String): Event {
        println("getting message: $message")
        return eventService.getEventByName("magyar kupa")
    }
}