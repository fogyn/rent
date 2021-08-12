package com.dip.rent.service;


import com.dip.rent.model.Order;
import com.dip.rent.model.Person;
import com.dip.rent.repo.OrderRepo;
import com.dip.rent.repo.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Service
public class MainService {
    @Autowired
    private PersonRepo personRepo;
    @Autowired
    private OrderRepo orderRepo;

    public String todoNewPerson(){
        //Person person1 = personRepo.save(new Person());

        Person person = personRepo.save(new Person("test2"));
        System.out.println(person.getId()+" - " + person.getNamePerson());
        //
//        Person person3 = new Person();
//        person3.setNamePerson("person3");
//        //personRepo.save(person3);
//        Set<Order> orders = new HashSet<>();
//        orders.add(new Order("order1", person3));
//        orders.add(new Order("order2", person3));
//        orders.add(new Order("order3", person3));
        //person3.setOrders(orders);
        //
        //personRepo.save(person3);
        return "новый добавлен";
    }
    public String todoNewOrder(){
        Order order = orderRepo.save(new Order("order test"));
        System.out.println(order.getOrderId()+" - " + order.getNameOrder());
        return "новый ордер создан";
    }

//    public ArrayList<Person> getAllPersons(){
//        ArrayList<Order> orders = (ArrayList<Order>) orderRepo.findAll();
//        for(Order o:orders){
//            System.out.println("order - "+o.getOrderId()+", - "+o.getNameOrder()+", - "+o.getPerson().getId()+o.getPerson().getNamePerson());
//        }
//        System.out.println("-----");
//        ArrayList<Person> listPersons = (ArrayList) personRepo.findAll();
//        for(Person person: listPersons){
//            System.out.println(person.getId()+" - " + person.getNamePerson());
//            System.out.println("--------------");
//        }
//        return listPersons;
//    }

}
