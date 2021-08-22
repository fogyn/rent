package com.dip.rent.service;

import com.dip.rent.model.Flat;
import com.dip.rent.repo.FlatRepo;
import com.dip.rent.repo.OrderRepo;
import com.dip.rent.repo.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FlatService {
    @Autowired
    private PersonRepo personRepo;
    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private FlatRepo flatRepo;

    public boolean deleteFlatById(long idFlat){
        try{
            flatRepo.deleteById(idFlat);
            return true;
        }
        catch (NullPointerException e){
            return false;
        }
    }
    public boolean deleteAllFlat(){
        try{
            flatRepo.deleteAll();
            return true;
        }
        catch (NullPointerException e){
            return false;
        }
    }

    public Flat getFlatById(long idFlat){

        return flatRepo.findById(idFlat).get();
    }

    public boolean todoUpdateFlat(Flat flat){
        try{
            flatRepo.save(flat);
            return true;
        }

        catch (IllegalArgumentException e){
            return false;
        }

    }

}
