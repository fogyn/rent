package com.dip.rent.service;

import com.dip.rent.model.Order;
import com.dip.rent.model.response.OrderByFlatListDTO;
import com.dip.rent.repo.FlatRepo;
import com.dip.rent.repo.OrderRepo;
import com.dip.rent.repo.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    private PersonRepo personRepo;
    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private FlatRepo flatRepo;

    public Order todoNewOrder(Order order){
        return orderRepo.save(order);
    }

    public Order todoUpdateOrder(Order order){
        return orderRepo.save(order);
    }
    //аренда которую сделал пользователь
//    public List<Order> getAllOrderByPerson(OrdersByPersonDTO dtoByPerson){
//        List<Order> listOrders;
//        if(dtoByPerson.getDateNow() == null){
//            listOrders = orderRepo.findOrderByPersonId(dtoByPerson.getIdPerson());
//        }
//        else{
//            listOrders = orderRepo.findOrderByPersonIdAndDate(dtoByPerson.getIdPerson(), dtoByPerson.getDateNow());
//        }
//
//        return listOrders;
//    }
//// заказы которые сделали по недвижимости пользователя
    public List<Order> getAllOrderByFlats(OrderByFlatListDTO ordersDTO){
        List<Order> listOrders = new ArrayList<>();
        if(!ordersDTO.isDateBoolean()){
            for(Long i:ordersDTO.getListFlatId()){
                List<Order> l = (List<Order>) orderRepo.getAllOrderByFlatId(i);
                listOrders.addAll(l);
            }
        }
        else{
            for(Long i:ordersDTO.getListFlatId()){
                Date date = new Date();
                System.out.println(date);
                List<Order> l = orderRepo.getAllByFlatIdAndEndDate(i, date);
                listOrders.addAll(l);
            }
        }
        return listOrders;
    }
}
 