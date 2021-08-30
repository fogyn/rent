package com.dip.rent.controller;

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

        Order orderSQL = orderService.todoNewOrder(order);
        System.out.println(orderSQL.getFlatId());
        return ResponseEntity.status(HttpStatus.OK).body(orderSQL);
    }
    //закрытие сделки
    @NotFound
    @PostMapping("closeOrder")
    public ResponseEntity<Order> updatePerson(@RequestBody Order order) {
        //System.out.println("id - "+person.getId());
        Order orderSQL = orderService.todoUpdateOrder(order);
        return ResponseEntity.status(HttpStatus.OK).body(orderSQL);
    }
    // возврат списка ордеров для истории - все что заказал person по Id
    @NotFound
    @PostMapping("orderByPerson")
    public ResponseEntity<List<Order>> getListFlatByPersonId(@RequestBody OrdersByPersonDTO dtoByPerson) {
        System.out.println("зашел = "+dtoByPerson.isDateBoolean());
        System.out.println("зашел id= "+dtoByPerson.getIdPerson());
        return ResponseEntity.status(HttpStatus.OK).body(orderService.getAllOrderByPerson(dtoByPerson));
    }
//    // возврат списка ордеров для истории - все что заказали у person по - IdFlat
    @NotFound
    @PostMapping("orderByFlats")
    public ResponseEntity<List<Order>> getListFlatByPersonId(@RequestBody OrderByFlatListDTO ordersDTO) {
        System.out.println("зашел = "+ordersDTO.isDateBoolean());
        System.out.println("зашел id= "+ordersDTO.getListFlatId().get(0));
        return ResponseEntity.status(HttpStatus.OK).body(orderService.getAllOrderByFlats(ordersDTO));
    }
}
