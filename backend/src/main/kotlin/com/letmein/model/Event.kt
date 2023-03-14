package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.format.annotation.DateTimeFormat
import java.time.LocalDate
import java.time.Period
import java.util.Date

@Document("events")
class Event(
    @Id
    private var Id: String? = null,

    private var Name: String,

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    private var StartDateTime: Date,

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    private var EndDatetime: Date,

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    private var EntranceStartTime: Date,

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    private var EntranceEndTime: Date,

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    private var RegistrationDeadLine: Date,

    private var DurationInHours: Period =
        Period.between(
            LocalDate.parse(StartDateTime.toString()),
            LocalDate.parse(EndDatetime.toString())),

    private var RegistrationOpen: Boolean,

    private var Venue: String? = null,

    private var Description: String? = null,

    private var AttendeeLimit: Int? = null,

    private var Attendees: List<User>? = ArrayList(),

    private var Organizers: List<User>? = ArrayList(),
    ) {

    public fun Apply(user: User){
        //TODO
    }

    public fun DeclineApplication(user: User){
        //TODO
    }

    public fun CheckIn(user: User){
        //TODO
    }

    public fun CheckOut(user: User){
        //TODO
    }
}