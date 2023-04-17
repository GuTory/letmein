package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
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
    lateinit var id: String

    var DurationInHours: Period = Period.between(
        StartDateTime,
        EndDatetime)

    @DBRef(lazy = true)
    var Attendees: MutableList<User> = ArrayList()

    @DBRef(lazy = true)
    var Organizers: MutableList<User> = ArrayList()

    fun CanRegister(): Boolean {
        return (LocalDate.now() < RegistrationEndTime) && (Attendees.size < AttendeeLimit)
    }
}