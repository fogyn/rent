package com.dip.rent.model.response;

import com.dip.rent.model.Flat;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OrderByFlatListDTO {
   //private List<Long> listFlatId;
    private List<Flat> listFlat;
    //private Date dateNow;
    private boolean dateBoolean;

    public OrderByFlatListDTO() {
    }

//    public List<Long> getListFlatId() {
//        return listFlatId;
//    }
//
//    public void setListFlatId(List<Long> listFlatId) {
//        this.listFlatId = listFlatId;
//    }

    public boolean isDateBoolean() {
        return dateBoolean;
    }

    public void setDateBoolean(boolean dateBoolean) {
        this.dateBoolean = dateBoolean;
    }

    public List<Flat> getListFlat() {
        return listFlat;
    }

    public void setListFlat(List<Flat> listFlat) {
        this.listFlat = listFlat;
    }
}
