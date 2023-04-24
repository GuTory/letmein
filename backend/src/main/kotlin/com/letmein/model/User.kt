package com.letmein.model

import com.fasterxml.jackson.annotation.JsonIgnore
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.DBRef
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

@Document("users")
data class User(

    @Indexed(unique = true)
    @Field("email")
    var email: String,

    var firstName: String,

    var lastName: String,

    @get:JvmName("getPasswordGenerated")
    var password: String = "",

    var company: String? = null,

    var team: String? = null,
) : UserDetails {

    @Id
    lateinit var id: String

    var roles: MutableList<String> = mutableListOf()

    @DBRef(lazy = true)
    @JsonIgnore
    var applications: MutableSet<Application> = mutableSetOf()

    @DBRef(lazy = true)
    var favoriteEvents: MutableSet<Event>? = mutableSetOf()

    @DBRef(lazy = true)
    var attendedEvents: MutableSet<Event> = mutableSetOf()

    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        return roles.map { SimpleGrantedAuthority(it) }.toMutableList()
    }

    override fun getPassword(): String {
        return password
    }

    override fun getUsername(): String {
        return email
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }
}