package com.dip.rent.controller;

import com.dip.rent.model.Flat;
import com.dip.rent.service.FlatService;
import com.dip.rent.service.MainService;
import org.hibernate.annotations.NotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "", produces = "application/json")
public class FlatController {
    @Autowired
    private MainService mainService;
    @Autowired
    private FlatService flatService;

    @NotFound
    @GetMapping("getFlatById/{id}")
    public ResponseEntity<Flat> getFlatById(@PathVariable int id) {
        System.out.println("зашел удаление по id");
        System.out.println("id - "+id);
        try {
            Flat flat = flatService.getFlatById(id);
            return ResponseEntity.status(HttpStatus.OK).body(flat);
        }
        catch (NullPointerException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Flat());
        }
    }

    @NotFound
    @GetMapping("deleteFlatById/{id}")
    public ResponseEntity<Boolean> deleteFlatById(@PathVariable int id) {
        System.out.println("зашел удаление по id");
        System.out.println("id - "+id);

        if(flatService.deleteFlatById(id)){
            return ResponseEntity.status(HttpStatus.OK).body(true);
        }
        else {
            return ResponseEntity.status(HttpStatus.FOUND).body(false);
        }

    }
    @NotFound
    @GetMapping("deleteAllFlat")
    public ResponseEntity<Boolean> deleteAllFlat() {
        System.out.println("зашел удаление всех");


        if(flatService.deleteAllFlat()){
            return ResponseEntity.status(HttpStatus.OK).body(true);
        }
        else {
            return ResponseEntity.status(HttpStatus.FOUND).body(false);
        }

    }

}
