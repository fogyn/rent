package com.dip.rent.controller;

import com.dip.rent.AutentificationDTO;
import com.dip.rent.model.Person;
import com.dip.rent.model.response.AuthorizationResponse;
import com.dip.rent.security.JwtTokenService;
import com.dip.rent.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
//@RequestMapping("/autentification")
public class AuthorizationController {
    @Autowired
    private MainService mainService;
    private final JwtTokenService jwtTokenService;
    public AuthorizationController(JwtTokenService jwtTokenService){
        this.jwtTokenService = jwtTokenService;
    }
    @PostMapping
    public ResponseEntity<AuthorizationResponse> authorize(@RequestBody AutentificationDTO autentificationDTO){
        Person personSQL = mainService.getPersonAutentification(autentificationDTO.getLogin(), autentificationDTO.getPassword());
        if(personSQL==null)
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(new AuthorizationResponse(personSQL,jwtTokenService.generateToken(personSQL)));
    }
}
