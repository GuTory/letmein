package com.letmein.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.format.annotation.DateTimeFormat
import java.util.Date

@Document(collection = "applications")
data class Application(
    @Id
    private var Id: String,

    @DBRef
    private val Event: Event,

    @DBRef
    private val User: User,

    //TODO: status enum
    private var Status: String,

    //TODO: payment method enum
    private var PaymentMethod: String,
) {

    @Field("application_id")
    private lateinit var applicationId: String

    @DateTimeFormat(style = "yyyy-MM-dd hh:mm:ss")
    private val ApplicationDate: Date = Date()

    private val EventName: String = Event.Name

    init {
        User.Applications += this
    }
}
