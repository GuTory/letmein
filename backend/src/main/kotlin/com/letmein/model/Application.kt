package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDateTime

@Document(collection = "applications")
data class Application(

    @DBRef
    var event: Event,

    @DBRef
    var user: User,

    var status: String,

    var paymentMethod: String,
) {

    @Id
    lateinit var id: String

    var applicationDate: LocalDateTime = LocalDateTime.now()

    var eventName: String = event.name
}
