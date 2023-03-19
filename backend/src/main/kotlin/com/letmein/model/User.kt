package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document

@Document("users")
data class User (
    @Id
    var id: String,

    var Email: String,

    var FirsName: String,

    var LastName: String,

    var Password: String? = null,

    var Company: String? = null,

    var Team: String? = null,

    var Roles: List<String>,

    @DBRef
     var Applications: List<Application>,

    @DBRef
     var FavoriteEvents: List<Event>,

    @DBRef
     var AttendedEvents: List<Event>,
) {
}