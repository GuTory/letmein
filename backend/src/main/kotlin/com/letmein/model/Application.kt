package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDateTime

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
        User.applications.plus(this)
        if(Event.CanRegister())
            Event.Attendees.plus(this)
    }
}
