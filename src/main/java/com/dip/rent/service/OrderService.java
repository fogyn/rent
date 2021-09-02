package com.dip.rent.service;

import com.dip.rent.model.Flat;
import com.dip.rent.model.Order;
import com.dip.rent.model.response.OrderByFlatListDTO;
import com.dip.rent.model.response.OrdersByPersonDTO;
import com.dip.rent.repo.FlatRepo;
import com.dip.rent.repo.OrderRepo;
import com.dip.rent.repo.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
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
         Order o = orderRepo.save(order);
        return o;
    }

    public Order todoUpdateOrder(Order order){
        return orderRepo.save(order);
    }
    //аренда которую сделал пользователь
    public List<Order> getAllOrderByPerson(OrdersByPersonDTO dtoByPerson){
        List<Order> listOrders = new ArrayList<>();
        if(!dtoByPerson.isDateBoolean()){
            listOrders = orderRepo.getAllOrderByPerson(dtoByPerson.getPerson());
        }
        else{
            Date date = new Date();
            System.out.println(date);
            System.out.println("---------");
            System.out.println(dtoByPerson.getPerson().getId());
            List<Order> allOrder = (List<Order>) orderRepo.findAll();
            System.out.println("all - "+allOrder.size());
            List<Order> l = orderRepo.getAllOrderByPerson(dtoByPerson.getPerson());
            if(l.size()>0){
                for(int a=0;a<l.size();a++){
                    System.out.println(l.get(a).getEndDate());
                    Date dateNow = new Date();
                    System.out.println(dateNow);
                    if(dateNow.compareTo(l.get(a).getEndDate())<0){
                        listOrders.add(l.get(a));
                    }
                }
            }
            else{
                System.out.println("выборка пуста");
            }
        }

        return listOrders;
    }
//// заказы которые сделали по недвижимости пользователя
    public List<Order> getAllOrderByFlats(OrderByFlatListDTO ordersDTO){
        List<Order> listOrders = new ArrayList<>();
        if(!ordersDTO.isDateBoolean()){
            System.out.println("без даты");
            for(Flat flat:ordersDTO.getListFlat()){
               List<Order> l = orderRepo.getAllOrderByFlat(flat);
                listOrders.addAll(l);
            }
        }
        else{
            for(Flat flat:ordersDTO.getListFlat()){
                //String dt = new SimpleDateFormat("yyyy-MM-dd").format(date)+" 00:00:00.0";
                List<Order> l = new ArrayList<>();
                l = orderRepo.getAllOrderByFlat(flat);
                if(l.size()>0){
                    System.out.println(l.get(0).getFlat().getPrice());
//
                    for(int a=0;a<l.size();a++){
                        //System.out.println(l.get(a).getEndDate());
                        Date dateNow = new Date();
                       // System.out.println(dateNow);
                        if(dateNow.compareTo(l.get(a).getEndDate())<0){
                            listOrders.add(l.get(a));
                        }
                    }
//                    listOrders.addAll(l);
//                    System.out.println("ok");

                }
                else{
                    System.out.println("выборка пуста");
                }
            }
        }
        System.out.println(listOrders.size());
        return listOrders;
    }

    public Order getOrderById(long id){
        return orderRepo.findById(id).get();
    }

    public boolean todoUpdateOrder2(Order order) {
        try {
            orderRepo.save(order);
            return true;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }
}
 