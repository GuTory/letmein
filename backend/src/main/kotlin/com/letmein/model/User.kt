package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document("users")
data class User (
    @Id
    private var Id: String,

    private var Email: String,

    private var Password: String,

    private var FirsName: String,

    private var LastName: String? = null,

    // TODO: Role types: enum?
    private var Roles: List<String>? = ArrayList(),

    // TODO: Event and User Connection is an entity
    private var Applications: List<Event>? = null,

) {

}