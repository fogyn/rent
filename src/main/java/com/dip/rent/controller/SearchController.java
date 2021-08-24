package com.dip.rent.controller;

import com.dip.rent.model.Flat;
import com.dip.rent.model.Person;
import com.dip.rent.service.FlatService;
import com.dip.rent.service.MainService;
import com.dip.rent.service.SearchService;
import org.hibernate.annotations.NotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "", produces = "application/json")
public class SearchController {
    @Autowired
    private SearchService search;



    @NotFound
    @GetMapping("searchAllFlat/{id}")
    public ResponseEntity<List<Flat>> searchAllFlat(@PathVariable int id) {
        System.out.println("показать всю недвижимость кроме собственной");
        List<Flat> listFlat = search.getAllFlat(id);

       return ResponseEntity.status(HttpStatus.OK).body(listFlat);


    }
    @NotFound
    @GetMapping("searchAllPerson/{id}")
    public ResponseEntity<List<Person>> searchAllPerson(@PathVariable int id) {
        System.out.println("показать всю недвижимость кроме собственной");
        List<Person> listPerson = search.getAllPerson(id);

        return ResponseEntity.status(HttpStatus.OK).body(listPerson);


    }
}
