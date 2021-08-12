package com.dip.rent.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import static java.lang.String.format;

@Entity
@Table(name = "PERSONS")
public class Person {

    @Id
    @Column(name = "person_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "person_name")
    private String namePerson;

    //@OneToMany(mappedBy = "person", cascade = CascadeType.ALL)
    //@OneToMany(fetch = FetchType.EAGER, mappedBy = "person")
    //@OneToMany(mappedBy="order", cascade = CascadeType.ALL, orphanRemoval = true)
    //@OneToMany(mappedBy="person", cascade=CascadeType.ALL)
    //@OneToMany(cascade = {CascadeType.PERSIST})
    //@OneToMany(mappedBy = "person", fetch = FetchType.LAZY, cascade = CascadeType.ALL)


//    @OneToMany(mappedBy = "person", cascade = CascadeType.ALL, orphanRemoval = true)
//    //@JoinColumn(name = "order_id")
//    private Set<Order> orders = new HashSet<Order>();

    /**
     * Конструктор.
     */
    public Person() {
        String uid = UUID.randomUUID().toString();
        this.namePerson = format("Name_%s", uid);
    }
    public Person(String name) {

        this.namePerson = name;
    }
    public Person(String name, Set<Order> orders) {

        this.namePerson = name;

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNamePerson() {
        return namePerson;
    }

    public void setNamePerson(String namePerson) {
        this.namePerson = namePerson;
    }


}