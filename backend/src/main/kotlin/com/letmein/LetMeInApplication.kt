package com.letmein

import com.letmein.model.User
import com.letmein.repository.UserRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories


@SpringBootApplication
@EnableMongoRepositories
class LetMeInApplication

fun main(args: Array<String>) {
    runApplication<LetMeInApplication>(*args)
}
