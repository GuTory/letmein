package com.letmein.auth

data class RegistrationRequestDTO(
    var email: String,
    var firstName: String,
    var lastName: String,
    var password: String,
    var company: String,
    var team: String
)