package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.format.annotation.DateTimeFormat
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.Date

enum class Status(val value: String) {
    PENDING ("Pending"),
    APPROVED ("Approved"),
    REJECTED ("Rejected")
}

@Document(collection = "applications")
data class Application(

    @DBRef
    var Event: Event,

    @DBRef
    var User: User,

    var Status: String,

    var PaymentMethod: String,
) {

    @Id
    lateinit var Id: String

    var ApplicationDate: LocalDateTime = LocalDateTime.now()

    var EventName: String = Event.Name

    init {
        User.Applications.plus(this)
        if(Event.CanRegister())
            Event.Attendees.plus(this)
    }
}
