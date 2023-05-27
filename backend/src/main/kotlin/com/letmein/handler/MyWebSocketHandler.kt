package com.letmein.handler

import com.google.gson.Gson
import com.letmein.dto.ApplicationDTO
import org.springframework.stereotype.Component
import org.springframework.web.socket.CloseStatus
import org.springframework.web.socket.WebSocketHandler
import org.springframework.web.socket.WebSocketMessage
import org.springframework.web.socket.WebSocketSession

@Component
class MyWebSocketHandler : WebSocketHandler {

    private val sessions = mutableListOf<WebSocketSession>()

    override fun afterConnectionEstablished(session: WebSocketSession) {
        sessions.add(session)
    }

    override fun handleMessage(session: WebSocketSession, message: WebSocketMessage<*>) {
        try {
            val obj = Gson().fromJson(message.payload.toString(), ApplicationDTO::class.java)
            if (obj is ApplicationDTO) {
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