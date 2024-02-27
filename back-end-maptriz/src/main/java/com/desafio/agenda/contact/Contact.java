package com.desafio.agenda.contact;

import com.desafio.agenda.user.User;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "contact")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    private int document;
    private LocalDate dateOfBirth;
    private String email;
    private int phone;
    private String address;
    private String city;
    private String state;
    private int zip;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Contact() {};

    public Contact(String name,
                   String lastName,
                   int document,
                   LocalDate dateOfBirth,
                   String email,
                   int phone,
                   String address,
                   String city,
                   String state,
                   int zip,
                   User user) {
        this.name = name;
        this.lastName = lastName;
        this.document = document;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getDocument() {
        return document;
    }

    public void setDocument(int document) {
        this.document = document;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
