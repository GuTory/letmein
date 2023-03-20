package com.letmein

import com.letmein.model.Application
import com.letmein.model.Event
import com.letmein.model.User
import com.letmein.repository.ApplicationRepository
import com.letmein.repository.EventRepository
import com.letmein.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Profile
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import java.time.LocalDate

@SpringBootApplication
@EnableMongoRepositories
class LetMeInApplication

fun main(args: Array<String>) {
    runApplication<LetMeInApplication>(*args)
}
