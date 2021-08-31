package com.dip.rent.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "ORDERS")
public class Order {


    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;


    @OneToOne
     private Person person;

    @OneToOne
    private Flat flat;

    @Column(name = "startDate",nullable = false)
    private Date startDate;

    @Column(name = "endDate")
    private Date endDate;
//
    public Order() {}

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Flat getFlat() {
        return flat;
    }

    public void setFlat(Flat flat) {
        this.flat = flat;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}
