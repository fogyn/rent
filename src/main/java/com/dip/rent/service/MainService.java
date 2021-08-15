package com.dip.rent.service;


import com.dip.rent.model.Flat;
import com.dip.rent.model.Person;
import com.dip.rent.repo.FlatRepo;
import com.dip.rent.repo.OrderRepo;
import com.dip.rent.repo.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {
    @Autowired
    private PersonRepo personRepo;
    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private FlatRepo flatRepo;

    public Person todoNewPerson(){
        Person person = new Person();
        person.setNamePerson("name");
        person.setCityPerson("City");
        person.setCountryPerson("Country");
        person.setAddressPerson("str avenu11, h.12.f.12");
        person.setPassword("111111");
        person.setPhone("+79518710569");
        person.setEmail("test@mail.ru");
        person.setRatingPerson(10);
        Person person1 = personRepo.save(person);

        System.out.println("новый пользователь добавлен");

        Flat flat = new Flat();
        flat.setNameFlat("falt1");
        flat.setCountryFlat("country1");
        flat.setCityFlat("city1");
        flat.setAddressFlat("str1");
        flat.setAbout("text about");
        flat.setPrice(100);
        flat.setPerson(person1);
        flatRepo.save(flat);
        System.out.println("новое жилье добавлено");

        return person1;
    }
    public Person todoNewPerson(String name, String country, String city, String address, String password, String phone, String email, byte[] image) {
        //System.out.println("длина в сервисе - "+image.length);
        Person person = new Person();
        person.setNamePerson(name);
        person.setCityPerson(city);
        person.setCountryPerson(country);
        person.setAddressPerson(address);
        person.setPassword(password);
        person.setPhone(phone);
        person.setEmail(email);
        person.setRatingPerson(10);
        person.setImage(image);
        Person person1 = personRepo.save(person);
        //System.out.println("Длина из базы - "+person1.getImage().length);

        System.out.println("новый пользователь добавлен");
        return person1;
    }

    public Person todoNewPerson(String name, String country, String city, String address, String password, String phone, String email) {
        Person person = new Person();
        person.setNamePerson(name);
        person.setCityPerson(city);
        person.setCountryPerson(country);
        person.setAddressPerson(address);
        person.setPassword(password);
        person.setPhone(phone);
        person.setEmail(email);
        person.setRatingPerson(10);
        Person person1 = personRepo.save(person);

        System.out.println("новый пользователь добавлен");
        return person1;
    }

    public Person todoUpdatePerson(Person person){

        Person person1 = personRepo.save(person);


        System.out.println("пользователь отредактирован");
        return person1;
    }

    public String todoNewOrder(){
        return "новый ордер создан";
    }

    public List<Person> getAllPersons(){
        List<Person> listPersons = new ArrayList<>();
        listPersons = (List<Person>) personRepo.findAll();

        return  listPersons;
    }

    public Person getPersonAutentification(String login, String password){
        return personRepo.findPersonByPhoneAndPassword(login, password);
    }

    public boolean deletePerson(long personId){
        try{
            personRepo.deleteById(personId);
            return true;
        }
        catch (NullPointerException e){
            return false;
        }

    }

    public List<Flat> getAllFlatId(long personId){

        return flatRepo.getAllFlatByPersonId(personId);
    }

    public List<Flat> getAllFlat(){

        return (List<Flat>) flatRepo.findAll();
    }

    public String createNewFlat(String name, String country, String city, String address,
                                String about, int price, Person person){
        System.out.println("id person - "+person.getId());
            Optional<Person> person1 = personRepo.findById(person.getId());
            if(person1.isPresent()){
                System.out.println("id person2 - "+person1.get().getId());
                Flat flat = new Flat();
                flat.setNameFlat(name);
                flat.setRatingFlat(10);
                flat.setCountryFlat(country);
                flat.setCityFlat(city);
                flat.setAddressFlat(address);
                flat.setAbout(about);
                flat.setPrice(price);
                flat.setPerson(person1.get());
                Flat f = flatRepo.save(flat);

                System.out.println("Flat to do");
                System.out.println(f.getPerson().getId());
                return "Ok flat";
            }
            else{
                System.out.println("ничего нет");
                return "bed";
            }






    }


}
