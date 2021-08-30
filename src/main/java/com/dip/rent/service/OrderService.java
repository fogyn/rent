package com.dip.rent.service;

import com.dip.rent.model.Order;
import com.dip.rent.model.response.OrderByFlatListDTO;
import com.dip.rent.model.response.OrdersByPersonDTO;
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
    public List<Order> getAllOrderByPerson(OrdersByPersonDTO dtoByPerson){
        List<Order> listOrders;
        if(!dtoByPerson.isDateBoolean()){
            listOrders = orderRepo.getAllOrderByPersonId(dtoByPerson.getIdPerson());
        }
        else{
            Date date = new Date();
            //listOrders = orderRepo.findOrderByPersonIdAndDate(dtoByPerson.getIdPerson(), date);
            listOrders = orderRepo.getAllOrderByPersonId(dtoByPerson.getIdPerson());
        }

        return listOrders;
    }
//// заказы которые сделали по недвижимости пользователя
    public List<Order> getAllOrderByFlats(OrderByFlatListDTO ordersDTO){
        List<Order> listOrders = new ArrayList<>();
        if(!ordersDTO.isDateBoolean()){
            System.out.println("без даты");
            for(Long i:ordersDTO.getListFlatId()){
                List<Order> l = orderRepo.getAllOrderByFlatId(i);
                listOrders.addAll(l);
            }
        }
        else{
            System.out.println("с датой");
            for(Long i:ordersDTO.getListFlatId()){
                Date date = new Date();
                //Date date1 = new Date();
                System.out.println(date);
                System.out.println(i);
                //List<Order> l = orderRepo.getAllOrderByEndDate(date);
                List<Order> l = orderRepo.getAllOrderByFlatId(i);
                if(l.size()>0){
                    System.out.println(l.get(0).getOrderId());
                    System.out.println(l.get(0).getPersonId());
                    System.out.println(l.get(0).getFlatId());
                    System.out.println(l.get(0).getStartDate());
                    System.out.println(l.get(0).getEndDate());
                    listOrders.addAll(l);
                }
                else{
                    System.out.println("выборка пуста");
                }

            }
        }
        System.out.println(listOrders.size());
        return listOrders;
    }
}
 