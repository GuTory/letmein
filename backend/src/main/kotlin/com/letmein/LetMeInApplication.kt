package com.letmein

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableMongoRepositories
class LetMeInApplication

/*
	@Profile("test")
	override fun run(
		vararg args: String?,
	) {

		println("This is test profile")

		val pattern = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")

		var FACup = Event(
			"Manchester United vs Fulham",
			Date("2020-01-01 10:00:00"),
			Date("2020-01-01 12:00:00"),
			Date("2020-01-01 09:00:00"),
			Date("2020-01-01 09:50:00"),
			Date("2020-01-01 08:00:00"),
			"Old Trafford",
			"Manchester United vs Fulham",
			78000,
			listOf(),
			listOf(),
		)

		var me = User(
			"posedge@clk.hu",
			"Péter",
			"Oszkó",
			"1234",
			"CLK",
			"IT",
			listOf("USER", "ADMIN"),
			listOf(),
			listOf(FACup),
			listOf())

		var appl = Application(
			FACup,
			me,
			"Pending",
			"Debit Card"
		)


	}

 */


fun main(args: Array<String>) {
	runApplication<LetMeInApplication>(*args)
}
