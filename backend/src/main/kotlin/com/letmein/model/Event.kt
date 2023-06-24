package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
import java.time.Duration
import java.time.LocalDateTime

@Document("events")
data class Event(
    var name: String,

    var startDateTime: LocalDateTime,

    var endDatetime: LocalDateTime,

    var entranceStartTime: LocalDateTime,

    var entranceEndTime: LocalDateTime,

    var registrationEndTime: LocalDateTime,

    var venue: String,

    var description: String,

    var attendeeLimit: Int,
) {
    @Id
    lateinit var id: String

    var durationInHours: Duration = Duration.between(
        startDateTime,
        endDatetime)

    var imagePath: String? = ""

    @DBRef(lazy = true)
    var attendees: MutableSet<User> = HashSet()

    @DBRef
    var organizers: MutableSet<User> = HashSet()

    fun canRegister(): Boolean {
        return (LocalDateTime.now() < registrationEndTime) && (attendees.size < attendeeLimit)
    }
}