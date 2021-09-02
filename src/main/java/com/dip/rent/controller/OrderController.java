package com.dip.rent.controller;

import com.dip.rent.model.Flat;
import com.dip.rent.model.Order;
import com.dip.rent.model.response.OrderByFlatListDTO;
import com.dip.rent.model.response.OrdersByPersonDTO;
import com.dip.rent.service.OrderService;
import org.hibernate.annotations.NotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "", produces = "application/json")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @NotFound
    @PostMapping("create-new-order")
    public ResponseEntity<Order> createPerson(@RequestBody Order order) {
        System.out.println(order.getFlat().getIdFlat());
        System.out.println(order.getPerson().getId());
        System.out.println(order.getStartDate());
        System.out.println(order.getEndDate());
        System.out.println("-------------------");
        Order orderSQL = orderService.todoNewOrder(order);
        System.out.println(orderSQL.getOrderId());
        System.out.println(orderSQL.getFlat().getIdFlat());
        System.out.println(orderSQL.getPerson().getId());
        System.out.println(orderSQL.getStartDate());
        System.out.println(orderSQL.getEndDate());
        return ResponseEntity.status(HttpStatus.OK).body(orderSQL);
    }
    //закрытие сделки
    @NotFound
    @PostMapping("closeOrder")
    public ResponseEntity<Order> updatePerson(@RequestBody Order order) {
        System.out.println("!!!!!!!!!!!!!!!!!!!!! CLOSE");
        System.out.println("!!!!!!!!!!!!!!!!!!!!! CLOSE");
        System.out.println("!!!!!!!!!!!!!!!!!!!!! CLOSE");

        Order orderSQL = orderService.todoUpdateOrder(order);
        return ResponseEntity.status(HttpStatus.OK).body(orderSQL);
    }
    // возврат списка ордеров для истории - все что заказал person по Id
    @NotFound
    @PostMapping("orderByPerson")
    public ResponseEntity<List<Order>> getListFlatByPersonId(@RequestBody OrdersByPersonDTO dtoByPerson) {
        //System.out.println("зашел = "+dtoByPerson.isDateBoolean());
        //System.out.println("зашел id= "+dtoByPerson.getIdPerson());
        return ResponseEntity.status(HttpStatus.OK).body(orderService.getAllOrderByPerson(dtoByPerson));
    }
//    // возврат списка ордеров для истории - все что заказали у person по - IdFlat
    @NotFound
    @PostMapping("orderByFlats")
    public ResponseEntity<List<Order>> getListFlatByPersonId(@RequestBody OrderByFlatListDTO ordersDTO) {
        //System.out.println("зашел = "+ordersDTO.isDateBoolean());
        //System.out.println("зашел id= "+ordersDTO.getListFlatId().get(0));
        return ResponseEntity.status(HttpStatus.OK).body(orderService.getAllOrderByFlats(ordersDTO));
    }
    @NotFound
    @GetMapping("getOrderById/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable int id) {
        System.out.println("запрос на ордер по id");
        System.out.println("id - "+id);
        try {
            Order order = orderService.getOrderById(id);
            return ResponseEntity.status(HttpStatus.OK).body(order);
        }
        catch (NullPointerException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Order());
        }
    }
    @NotFound
    @PostMapping("updateOrder")
    public ResponseEntity<String> updateOrder(@RequestBody Order order) {
        System.out.println("id - "+order.getOrderId());
        System.out.println("idPerson - "+order.getPerson().getId());
        boolean answer = orderService.todoUpdateOrder2(order);
        if(answer){
            return ResponseEntity.status(HttpStatus.OK).body("Ok");
        }
        else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bed");
        }

    }
}
