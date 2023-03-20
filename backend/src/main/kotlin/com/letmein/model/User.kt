package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document

@Document("users")
data class User (

    var Email: String,

    var FirsName: String,

    var LastName: String,

    var Password: String? = null,

    var Company: String? = null,

    var Team: String? = null,
) {
    @Id
    lateinit var id: String

    var Roles: List<String>? = null

    @DBRef
    var Applications: List<Application> = ArrayList()

    @DBRef
    var FavoriteEvents: List<Event>? = ArrayList()

    @DBRef
    var AttendedEvents: List<Event> = ArrayList()
}