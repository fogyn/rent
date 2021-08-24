package com.dip.rent.service;

import com.dip.rent.model.Flat;
import com.dip.rent.model.Person;
import com.dip.rent.repo.FlatRepo;
import com.dip.rent.repo.OrderRepo;
import com.dip.rent.repo.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {
    @Autowired
    private PersonRepo personRepo;
    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private FlatRepo flatRepo;

    public List<Flat> getAllFlat(long id){
        List<Flat> listFlats = (List<Flat>) flatRepo.findAll();
        if(listFlats.size()==0 ){
            return listFlats;
        }
        else{
            List<Flat> list = new ArrayList<>();
            for(Flat flat:listFlats){
                if(flat.getPerson().getId()!=id){
                    list.add(flat);
                }
            }
            return list;
        }


    }

    public List<Person> getAllPerson(long id){
        List<Person> listPersons = (List<Person>) personRepo.findAll();
        if(listPersons.size()==0){
            return listPersons;
        }
        else{
            List<Person> list = new ArrayList<>();
            for(Person person:listPersons){
                //?
                if(person.getId()!=id && person.getFlats().size()>0){
                    list.add(person);
                }
            }
            return list;
        }

    }
}
