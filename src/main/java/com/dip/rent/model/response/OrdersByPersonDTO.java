package com.dip.rent.model.response;

import java.util.Date;

public class OrdersByPersonDTO {
    private long idPerson;
    //private Date dateNow;
    private boolean dateBoolean;

    public OrdersByPersonDTO() {
    }

    public long getIdPerson() {
        return idPerson;
    }

    public void setIdPerson(long idPerson) {
        this.idPerson = idPerson;
    }

//    public Date getDateNow() {
//        return dateNow;
//    }
//
//    public void setDateNow(Date dateNow) {
//        this.dateNow = dateNow;
//    }

    public boolean isDateBoolean() {
        return dateBoolean;
    }

    public void setDateBoolean(boolean dateBoolean) {
        this.dateBoolean = dateBoolean;
    }
}
