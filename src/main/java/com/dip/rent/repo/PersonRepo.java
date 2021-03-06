package com.dip.rent.repo;

import com.dip.rent.model.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepo extends CrudRepository<Person, Long> {

    @Query(name ="SELECT * FROM PERSONS as p WHERE p.phone = phone AND p.password = password", nativeQuery=true)
    Person findPersonByPhoneAndPassword(@Param("phone") String phone, @Param("password") String password);





}
