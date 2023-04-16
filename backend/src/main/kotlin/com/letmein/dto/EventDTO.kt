package com.letmein.dto

import java.time.LocalDate

data class EventDTO(
    var name: String,
    var startDateTime: LocalDate,
    var endDateTime: LocalDate,
    var entranceStartTime: LocalDate,
    var entranceEndTime: LocalDate,
    var registrationEndTime: LocalDate,
    var venue: String,
    var description: String,
    var attendeeLimit: Int
) {
}