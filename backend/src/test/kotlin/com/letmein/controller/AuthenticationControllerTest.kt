package com.letmein.controller

import com.letmein.dto.AuthenticationRequest
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.http.HttpStatus
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.MockMvcBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders

@ExtendWith
@WebMvcTest
class AuthenticationControllerTest {

    @Autowired
    private lateinit var mvc: MockMvc

    @Test
    fun login() {
        val authreq = AuthenticationRequest(
            email = "admin",
            password = "admin"
        )
        var request = MockMvcRequestBuilders.post("/api/v1/auth/authenticate", authreq)
        var result = mvc.perform(request).andReturn()
        assertEquals(result.response.status, HttpStatus.OK.value())
    }

    @Test
    fun register() {
    }
}