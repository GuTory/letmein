package com.letmein.dto

data class RegistrationRequest(
    var email: String,
    var firstName: String,
    var lastName: String,
    var password: String,
    var company: String,
    var team: String,
    var roles: List<String>
)