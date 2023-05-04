package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
import java.time.Duration
import java.time.LocalDateTime

//TODO: add picture field
@Document("events")
data class Event(
    var Name: String,

    var StartDateTime: LocalDateTime,

    var EndDatetime: LocalDateTime,

    var EntranceStartTime: LocalDateTime,

    var EntranceEndTime: LocalDateTime,

    var RegistrationEndTime: LocalDateTime,

    var Venue: String,

    var Description: String,

    var AttendeeLimit: Int,
) {
    @Id
    lateinit var id: String

    var DurationInHours: Duration = Duration.between(
        StartDateTime,
        EndDatetime)

    var imagePath: String? = null

    @DBRef(lazy = true)
    var Attendees: MutableSet<User> = HashSet()

    @DBRef
    var Organizers: MutableSet<User> = HashSet()

    fun CanRegister(): Boolean {
        return (LocalDateTime.now() < RegistrationEndTime) && (Attendees.size < AttendeeLimit)
    }
}