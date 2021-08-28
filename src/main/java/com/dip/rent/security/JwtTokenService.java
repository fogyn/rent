package com.dip.rent.security;

import com.dip.rent.model.Person;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.springframework.stereotype.Service;


import java.util.*;

@Service
public class JwtTokenService {
    private final String secret = "ComputerService";
    private final Map<String, Person> tokens = new HashMap<>();

    public String generateToken(Person person){

        String token = Jwts.builder().setSubject(person.getPhone()).setId((person.getId()).toString())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000000))
                .signWith(SignatureAlgorithm.HS512,secret.getBytes()).compact();
        tokens.put(token,person);
        System.out.println("такой персон - "+tokens.get(token));
        return token;
    }
    public Person findUserByToken(String token){
        return tokens.get(token);
    }
    public void deleteUserByToken(String token){
        tokens.remove(token);
    }

}
