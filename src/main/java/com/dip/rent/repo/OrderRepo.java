package com.dip.rent.repo;


import com.dip.rent.model.Flat;
import com.dip.rent.model.Order;
import com.dip.rent.model.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface OrderRepo extends CrudRepository<Order, Long> {
//    @Query(name ="SELECT * FROM FLATS as f WHERE f.PersonId = personid", nativeQuery=true)
//    List<Flat> getAllFlatByPersonId(@Param("personid") long personid);
//@Query(name ="SELECT * FROM PERSONS as p WHERE p.phone = phone AND p.password = password", nativeQuery=true)
//Person findPersonByPhoneAndPassword(@Param("phone") String phone, @Param("password") String password);

    @Query(name ="SELECT * FROM ORDERS as o WHERE o.PersonId = personid ", nativeQuery=true)
    List<Order> getAllOrderByPersonId(@Param("personid") long personid);
//
//    @Query(name ="SELECT * FROM ORDERS as o WHERE time between o.startDate AND o.endDate or time < o.startDate AND o.PersonId = person", nativeQuery=true)
//   List<Order> findOrderByPersonIdAndDate(@Param("person") Long person, @Param("time") Date time);
//
//
    @Query(name ="SELECT * FROM ORDERS as o WHERE o.Flat_Id = flatid", nativeQuery=true)
    List<Order> getAllOrderByFlatId(@Param("flatid") long flatid);
//    @Query(name ="SELECT * FROM FLATS as f WHERE f.PersonId = personid", nativeQuery=true)
//    List<Flat> getAllFlatByPersonId(@Param("personid") long personid);


//
    @Query(name ="SELECT * FROM ORDERS as o WHERE  o.endDate > DATE enddate", nativeQuery=true)
    List<Order> getAllOrderByEndDate(@Param("enddate") Date enddate);
//, @Param("time") Date time

}
