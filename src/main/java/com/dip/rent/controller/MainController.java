package com.dip.rent.controller;

import com.dip.rent.model.Person;
import com.dip.rent.repo.PersonRepo;
import com.dip.rent.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


@RestController
@RequestMapping(value = "", produces = "application/json")
public class MainController {

    @Autowired
    private MainService mainService;
    //private PersonRepo personRep;


    @RequestMapping("create-person")
    public String createPerson() {
        String s = mainService.todoNewPerson();
        String ss = mainService.todoNewOrder();
        return s+", "+ss+". ok";
    }

//    @RequestMapping("persons")
//    public ArrayList getList() {
//        return mainService.getAllPersons();
//    }

}
