package com.letmein.dto

import java.time.LocalDateTime

data class EventDTO(
    var name: String,
    var startDateTime: LocalDateTime,
    var endDateTime: LocalDateTime,
    var entranceStartTime: LocalDateTime,
    var entranceEndTime: LocalDateTime,
    var registrationEndTime: LocalDateTime,
    var venue: String,
    var description: String,
    var attendeeLimit: Int
)