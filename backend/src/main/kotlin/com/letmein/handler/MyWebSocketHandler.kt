package com.letmein.handler

import com.letmein.dto.ApplicationDTO
import com.letmein.model.User
import com.letmein.service.ApplicationService
import com.letmein.service.UserService
import com.google.gson.Gson
import org.springframework.boot.json.GsonJsonParser
import org.springframework.stereotype.Component
import org.springframework.web.socket.CloseStatus
import org.springframework.web.socket.WebSocketHandler
import org.springframework.web.socket.WebSocketMessage
import org.springframework.web.socket.WebSocketSession

@Component
class MyWebSocketHandler(
    private val applicationService: ApplicationService,
    private val userService: UserService,
) : WebSocketHandler {

    private val sessions = mutableListOf<WebSocketSession>()

    override fun afterConnectionEstablished(session: WebSocketSession) {
        sessions.add(session)
    }

    override fun handleMessage(session: WebSocketSession, message: WebSocketMessage<*>) {
        try {
            val obj = Gson().fromJson(message.payload.toString(), ApplicationDTO::class.java)
            if (obj is ApplicationDTO) {
                println("message $obj")
                sessions.forEach {
                    it.sendMessage(message)
                }
            } else {
                println("bad format message ${message.payload}")
            }
        } catch (e: Exception) {
            println("exception ${e}")
        }
    }

    override fun handleTransportError(session: WebSocketSession, exception: Throwable) {

    }

    override fun afterConnectionClosed(session: WebSocketSession, closeStatus: CloseStatus) {
        sessions.remove(session)
    }

    override fun supportsPartialMessages(): Boolean {
        return false
    }

}