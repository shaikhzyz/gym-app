package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class message {
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String firstname;
	private String lastname;
	private String country;
	private String subject;
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public message(int id, String firstname, String lastname, String country, String subject) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.country = country;
		this.subject = subject;
	}
	public message() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
