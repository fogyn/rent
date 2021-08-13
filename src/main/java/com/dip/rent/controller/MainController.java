package com.dip.rent.controller;

import com.dip.rent.model.Flat;
import com.dip.rent.model.Person;
import com.dip.rent.service.MainService;
import org.hibernate.annotations.NotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "", produces = "application/json")
public class MainController {

    @Autowired
    private MainService mainService;
    //private PersonRepo personRep;

    @NotFound
    @GetMapping("create-person")
    public ResponseEntity<Person> createPerson() {
        Person newPerson = mainService.todoNewPerson();
        return ResponseEntity.status(HttpStatus.OK).body(newPerson);
    }
    @NotFound
    @PostMapping("create-new_person")
    public ResponseEntity<String> createPerson(@RequestBody Person person) {

        String answer = mainService.todoNewPerson(person.getNamePerson(), person.getCountryPerson(), person.getCityPerson(),
                person.getAddressPerson(), person.getPassword(), person.getPhone());
        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

    @NotFound
    @PostMapping("create-new_flat")
    public ResponseEntity<String> createFlat(@RequestBody Flat flat) {

        String answer = mainService.createNewFlat(flat.getNameFlat(), flat.getCountryFlat(), flat.getCityFlat(), flat.getAddressFlat(),
                flat.getAbout(), flat.getPrice(), flat.getPerson());
        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

    @NotFound
    @GetMapping("persons")
    public ResponseEntity<List<Person>> getListPersons() {

        return ResponseEntity.status(HttpStatus.OK).body(mainService.getAllPersons());
    }
    //
    @NotFound
    @GetMapping("flats")
    public ResponseEntity<List<Flat>> getListFlat() {
        //System.out.println("зашел");
        return ResponseEntity.status(HttpStatus.OK).body(mainService.getAllFlat());
    }
    //
    @NotFound
    @GetMapping("flatByPerson/{id}")
    public ResponseEntity<List<Flat>> getListFlatByPersonId(@PathVariable int id) {
        System.out.println("зашел = "+id);
        return ResponseEntity.status(HttpStatus.OK).body(mainService.getAllFlatId(id));
    }

}
