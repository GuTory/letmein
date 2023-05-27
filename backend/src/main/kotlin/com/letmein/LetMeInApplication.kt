package com.letmein

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories


@SpringBootApplication
@EnableMongoRepositories
class LetMeInApplication

fun main(args: Array<String>) {
    runApplication<LetMeInApplication>(*args)
}
