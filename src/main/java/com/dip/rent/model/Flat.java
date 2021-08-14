package com.dip.rent.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "FLATS")
public class Flat {
    @Id
    @Column(name = "flat_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFlat;

    @Column(name = "flat_name",nullable = false)
    private String nameFlat;

    @Column(name="flat_city",nullable = false)
    private String cityFlat;

    @Column(name="flat_country",nullable = false)
    private String countryFlat;

    @Column(name="flat_address",nullable = false)
    private String addressFlat;

    @Column(name="about")
    private String about;

    @Column(name="price",nullable = false)
    private int price;

    @Column(name="flat_rating")
    private long ratingFlat;

    // img ?????

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "PersonId")
    private Person person;

    public Flat() {
    }

    public Long getIdFlat() {
        return idFlat;
    }

    public void setIdFlat(Long idFlat) {
        this.idFlat = idFlat;
    }

    public String getNameFlat() {
        return nameFlat;
    }

    public void setNameFlat(String nameFlat) {
        this.nameFlat = nameFlat;
    }

    public String getCityFlat() {
        return cityFlat;
    }

    public void setCityFlat(String cityFlat) {
        this.cityFlat = cityFlat;
    }

    public String getCountryFlat() {
        return countryFlat;
    }

    public void setCountryFlat(String countryFlat) {
        this.countryFlat = countryFlat;
    }

    public String getAddressFlat() {
        return addressFlat;
    }

    public void setAddressFlat(String addressFlat) {
        this.addressFlat = addressFlat;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public long getRatingFlat() {
        return ratingFlat;
    }

    public void setRatingFlat(long ratingFlat) {
        this.ratingFlat = ratingFlat;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }


}
