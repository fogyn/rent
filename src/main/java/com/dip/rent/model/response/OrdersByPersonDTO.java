package com.dip.rent.model.response;

import com.dip.rent.model.Person;

import java.util.Date;

public class OrdersByPersonDTO {
    private Person person;
    //private Date dateNow;
    private boolean dateBoolean;

    public OrdersByPersonDTO() {
    }

//    public long getIdPerson() {
//        return idPerson;
//    }
//
//    public void setIdPerson(long idPerson) {
//        this.idPerson = idPerson;
//    }

//    public Date getDateNow() {
//        return dateNow;
//    }
//
//    public void setDateNow(Date dateNow) {
//        this.dateNow = dateNow;
//    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public boolean isDateBoolean() {
        return dateBoolean;
    }

    public void setDateBoolean(boolean dateBoolean) {
        this.dateBoolean = dateBoolean;
    }
}
