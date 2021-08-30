package com.dip.rent.model.response;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OrderByFlatListDTO {
    private List<Long> listFlatId;
    //private Date dateNow;
    private boolean dateBoolean;

    public OrderByFlatListDTO() {
    }

    public List<Long> getListFlatId() {
        return listFlatId;
    }

    public void setListFlatId(List<Long> listFlatId) {
        this.listFlatId = listFlatId;
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
