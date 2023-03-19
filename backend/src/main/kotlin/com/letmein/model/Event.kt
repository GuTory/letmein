package com.letmein.model

import com.letmein.model.User
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.format.annotation.DateTimeFormat
import java.time.LocalDate
import java.time.Period
import java.util.Date

//TODO: add picture field
@Document("events")
data class Event(
    @Id
    val Id: String,

    var Name: String,

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    var StartDateTime: Date,

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    var EndDatetime: Date,

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    var EntranceStartTime: Date,

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    var EntranceEndTime: Date,

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    var RegistrationEndTime: Date,

    var Venue: String,

    var Description: String,

    var AttendeeLimit: Int? = null,

    @DBRef
    var Attendees: List<User>,

    @DBRef
    var Organizers: List<User>,

    var DurationInHours: Period = Period.between(
        LocalDate.parse(StartDateTime.toString()),
        LocalDate.parse(EndDatetime.toString())
    ),
) {

    fun RegistrationOpen(): Boolean {
        return Date().before(RegistrationEndTime)
    }
}