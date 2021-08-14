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

    @Column(name = "flat_id",nullable = false)
    private long flatId;

//    @Column(name = "person_id",nullable = false)
//    private long personId;

    @Column(name = "state",nullable = false)
    private StateEnum state;

    @Column(name = "startDate",nullable = false)
    private Date startDate;

    @Column(name = "plane_end_Date",nullable = false)
    private Date planeEndDate;

    @Column(name = "endDate")
    private Date endDate;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "PersonId")
    private Person person;
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getPlaneEndDate() {
        return planeEndDate;
    }

    public void setPlaneEndDate(Date planeEndDate) {
        this.planeEndDate = planeEndDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public long getFlatId() {
        return flatId;
    }

    public void setFlatId(long flatId) {
        this.flatId = flatId;
    }

//    public long getPersonId() {
//        return personId;
//    }
//
//    public void setPersonId(long personId) {
//        this.personId = personId;
//    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}
