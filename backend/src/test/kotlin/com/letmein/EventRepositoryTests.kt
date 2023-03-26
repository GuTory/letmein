package com.letmein

import com.letmein.model.Event
import com.letmein.repository.EventRepository
import com.letmein.service.EventService
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.MockitoAnnotations
import org.mockito.junit.jupiter.MockitoExtension
import java.time.LocalDate

@ExtendWith(MockitoExtension::class)
class EventRepositoryTests {
	@Mock
	private lateinit var eventRepository: EventRepository

	@InjectMocks
	private lateinit var eventService: EventService

	@BeforeEach
	fun init(){
		MockitoAnnotations.openMocks(this)
	}

	@Test
	fun eventsgetAll() {
		val firstEvent = Event(
			"Assassin's Creed Valhalla",
			LocalDate.parse("2021-05-15"),
			LocalDate.parse("2021-05-15"),
			LocalDate.parse("2021-05-15"),
			LocalDate.parse("2021-05-15"),
			LocalDate.parse("2021-05-15"),
			"at home",
			"gaming event",
			999
		)
		val secondEvent = Event(
			"cook dinner",
			LocalDate.parse("2021-05-15"),
			LocalDate.parse("2021-05-15"),
			LocalDate.parse("2021-05-15"),
			LocalDate.parse("2021-05-15"),
			LocalDate.parse("2021-05-15"),
			"at the kitchen",
			"cooking event",
			3
		)
		val savedevent = eventService.saveEvent(firstEvent)
		assert(savedevent.Name == firstEvent.Name)
	}
}
