package com.dip.rent.repo;


import com.dip.rent.model.Order;
import com.dip.rent.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepo extends CrudRepository<Order, Long> {
}
