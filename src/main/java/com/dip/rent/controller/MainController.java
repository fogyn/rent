package com.dip.rent.controller;

import com.dip.rent.AutentificationDTO;
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
    @PostMapping("create-new-person")
    public ResponseEntity<Person> createPerson(@RequestBody Person person) {

        Person personSQL = mainService.todoNewPerson(person.getNamePerson(), person.getCountryPerson(), person.getCityPerson(),
                person.getAddressPerson(), person.getPassword(), person.getPhone(), person.getEmail());
        return ResponseEntity.status(HttpStatus.OK).body(personSQL);
    }
    @NotFound
    @PostMapping("autentification")
    public ResponseEntity<Person> autentificationPerson(@RequestBody AutentificationDTO autentificationDTO) {


        Person personSQL = mainService.getPersonAutentification(autentificationDTO.getLogin(), autentificationDTO.getPassword());
        if(personSQL!=null){
            return ResponseEntity.status(HttpStatus.OK).body(personSQL);
        }
        else {
            return ResponseEntity.status(HttpStatus.FOUND).body(new Person());
        }

    }

    @NotFound
    @GetMapping("deletePerson/{id}")
    public ResponseEntity<Boolean> deletePersonById(@PathVariable int id) {
        System.out.println("зашел");
        System.out.println("id - "+id);

        if(mainService.deletePerson(id)){
            return ResponseEntity.status(HttpStatus.OK).body(true);
        }
        else {
            return ResponseEntity.status(HttpStatus.FOUND).body(false);
        }

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
        //System.out.println("зашел = "+id);
        return ResponseEntity.status(HttpStatus.OK).body(mainService.getAllFlatId(id));
    }
    @NotFound
    @PostMapping("create-new_flat")
    public ResponseEntity<String> createFlat(@RequestBody Flat flat) {

        System.out.println("проверка "+flat.getPerson().getId());
        String answer = mainService.createNewFlat(flat.getNameFlat(), flat.getCountryFlat(), flat.getCityFlat(), flat.getAddressFlat(),
                flat.getAbout(), flat.getPrice(), flat.getPerson());
        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }



}
