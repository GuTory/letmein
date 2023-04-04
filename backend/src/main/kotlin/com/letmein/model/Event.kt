package com.letmein.model

import com.letmein.model.User
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.format.annotation.DateTimeFormat
import java.time.LocalDate
import java.time.Period

//TODO: add picture field
@Document("events")
data class Event(
    var Name: String,

    var StartDateTime: LocalDate,

    var EndDatetime: LocalDate,

    var EntranceStartTime: LocalDate,

    var EntranceEndTime: LocalDate,

    var RegistrationEndTime: LocalDate,

    var Venue: String,

    var Description: String,

    var AttendeeLimit: Int,
) {
    @Id
    lateinit var Id: String

    var DurationInHours: Period = Period.between(
        LocalDate.parse(StartDateTime.toString()),
        LocalDate.parse(EndDatetime.toString())
    )

    @DBRef(lazy = true)
    var Attendees: MutableList<User> = ArrayList()

    @DBRef(lazy = true)
    var Organizers: MutableList<User> = ArrayList()

    fun CanRegister(): Boolean {
        return (LocalDate.now() < RegistrationEndTime) && (Attendees.size < AttendeeLimit)
    }
}