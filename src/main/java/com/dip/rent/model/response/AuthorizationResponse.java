package com.dip.rent.model.response;

import com.dip.rent.model.Person;

public class AuthorizationResponse {
    private Person person;
    private String token;

    public AuthorizationResponse(Person person, String token) {
        this.person = person;
        this.token = token;
    }

    public Person getPerson() {
        return person;
    }

    public String getToken() {
        return token;
    }
}
