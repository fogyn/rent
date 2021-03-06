package com.dip.rent.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Blob;
import java.util.HashSet;
import java.util.List;
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

    @Column(name = "person_name",nullable = false)
    private String namePerson;

    @Column(name="person_city",nullable = false)
    private String cityPerson;

    @Column(name="person_country",nullable = false)
    private String countryPerson;

    @Column(name="person_address",nullable = false)
    private String addressPerson;

    @Column(name="phone",unique = true,length = 12,nullable = false)
    private String phone;
    @Column(name="email",unique = true,nullable = false)
    private String email;


    @Column(name="img", length = Integer.MAX_VALUE)
    private String image;


    @Column(name="password",nullable = false)
    private String password;

    @Column(name="person_rating")
    private long ratingPerson;

    @OneToMany(mappedBy = "person",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Flat> flats;

//    @OneToOne(mappedBy = "person", cascade = CascadeType.ALL, optional = false, fetch = FetchType.LAZY)
//    private Order order;

//    @OneToMany(mappedBy = "person",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
//    @JsonIgnore
//    private List<Order> orders;

    /**
     * Конструктор.
     */
    public Person() {

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

    public String getCityPerson() {
        return cityPerson;
    }

    public void setCityPerson(String cityPerson) {
        this.cityPerson = cityPerson;
    }

    public String getCountryPerson() {
        return countryPerson;
    }

    public void setCountryPerson(String countryPerson) {
        this.countryPerson = countryPerson;
    }

    public String getAddressPerson() {
        return addressPerson;
    }

    public void setAddressPerson(String addressPerson) {
        this.addressPerson = addressPerson;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getRatingPerson() {
        return ratingPerson;
    }

    public void setRatingPerson(long ratingPerson) {
        this.ratingPerson = ratingPerson;
    }
    public List<Flat> getFlats() {
        return flats;
    }

    public void setFlats(List<Flat> flats) {
        this.flats = flats;
    }

//    public List<Order> getOrders() {
//        return orders;
//    }
//
//    public void setOrders(List<Order> orders) {
//        this.orders = orders;
//    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

//    public Order getOrder() {
//        return order;
//    }
//
//    public void setOrder(Order order) {
//        this.order = order;
//    }
}