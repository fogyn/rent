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

    @Column(name = "order_name")
    private String nameOrder;

//    @ManyToOne
//    @JoinColumn(name = "personid")
//    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
//    @JoinColumn(name = "person_id", nullable = false)
    //@ManyToOne(fetch = FetchType.EAGER)
//    @ManyToOne
//    @JoinColumn(name="person_id")
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "person_id", nullable = false)
//@ManyToOne(fetch = FetchType.EAGER)
    //@ManyToOne(cascade = CascadeType.PERSIST, optional = false)
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "person_id", nullable = false)
//    private Person person;

    public Order() {}
    public Order(String name){
        this.nameOrder = name;
    }


    public Order(String name, Person person) {
        this.nameOrder = name;
        //this.person = person;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getNameOrder() {
        return nameOrder;
    }

    public void setNameOrder(String nameOrder) {
        this.nameOrder = nameOrder;
    }

//    public Person getPerson() {
//        return person;
//    }
//
//    public void setPerson(Person person) {
//        this.person = person;
//    }
}
