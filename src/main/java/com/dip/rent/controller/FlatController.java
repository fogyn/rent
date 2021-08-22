package com.dip.rent.controller;

import com.dip.rent.model.Flat;
import com.dip.rent.model.Person;
import com.dip.rent.service.FlatService;
import com.dip.rent.service.MainService;
import org.hibernate.annotations.NotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        System.out.println("запрос на флат по id");
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

    @NotFound
    @PostMapping("updateFlat")
    public ResponseEntity<String> updateFlat(@RequestBody Flat flat) {
        System.out.println("id - "+flat.getIdFlat());
        System.out.println("idPerson - "+flat.getPerson().getId());
        boolean answer = flatService.todoUpdateFlat(flat);
        if(answer){
            return ResponseEntity.status(HttpStatus.OK).body("Ok");
        }
        else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bed");
        }

    }
    @NotFound
    @PostMapping("create-new_flat")
    public ResponseEntity<String> createFlat(@RequestBody Flat flat) {

        System.out.println("проверка "+flat.getPerson().getId());
        String answer = mainService.createNewFlat(flat.getNameFlat(), flat.getCountryFlat(), flat.getCityFlat(), flat.getAddressFlat(),
                flat.getAbout(), flat.getPrice(), flat.getPerson(), flat.getImage());
        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

}
