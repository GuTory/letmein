package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document

@Document("users")
data class User (

    var Email: String,

    var FirstName: String,

    var LastName: String,

    var Password: String? = null,

    var Company: String? = null,

    var Team: String? = null,
) {
    @Id
    lateinit var id: String

    var Roles: MutableList<String>? = null

    @DBRef(lazy = true)
    var Applications: MutableList<Application> = ArrayList()

    @DBRef(lazy = true)
    var FavoriteEvents: MutableList<Event>? = ArrayList()

    @DBRef(lazy = true)
    var AttendedEvents: MutableList<Event> = ArrayList()
}