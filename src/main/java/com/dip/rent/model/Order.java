package com.dip.rent.model;

import com.sun.istack.NotNull;

import javax.persistence.*;



@Entity
@Table(name = "ORDERS")
public class Order {


    @Id
    @Column(name = "order_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(name = "flat_id",nullable = false)
    private long flatId;

    @Column(name = "person_id",nullable = false)
    private long personId;

    @Column(name = "state",nullable = false)
    private StateEnum state;

    @Column(name = "startDate",nullable = false)
    private long startDate;

    @Column(name = "plane_end_Date",nullable = false)
    private long planeEndDate;

    @Column(name = "endDate")
    private long endDate;
//
    public Order() {}

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }


    public StateEnum getState() {
        return state;
    }

    public void setState(StateEnum state) {
        this.state = state;
    }

    public long getStartDate() {
        return startDate;
    }

    public void setStartDate(long startDate) {
        this.startDate = startDate;
    }

    public long getPlaneEndDate() {
        return planeEndDate;
    }

    public void setPlaneEndDate(long planeEndDate) {
        this.planeEndDate = planeEndDate;
    }

    public long getEndDate() {
        return endDate;
    }

    public void setEndDate(long endDate) {
        this.endDate = endDate;
    }



    public long getFlatId() {
        return flatId;
    }

    public void setFlatId(long flatId) {
        this.flatId = flatId;
    }

    public long getPersonId() {
        return personId;
    }

    public void setPersonId(long personId) {
        this.personId = personId;
    }
}
