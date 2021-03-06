package com.dip.rent.repo;

import com.dip.rent.model.Flat;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface FlatRepo extends CrudRepository<Flat, Long> {
    @Query(name ="SELECT * FROM FLATS as f WHERE f.PersonId = personid", nativeQuery=true)
    List<Flat> getAllFlatByPersonId(@Param("personid") long personid);


}
