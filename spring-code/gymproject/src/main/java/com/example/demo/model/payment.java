package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class payment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	private String email;
	private String gymtype;
	private int fees;
	public payment(int id, String name, String email, String gymtype, int fees) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.gymtype = gymtype;
		this.fees = fees;
	}
	public int getFees() {
		return fees;
	}
	public void setFees(int fees) {
		this.fees = fees;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGymtype() {
		return gymtype;
	}
	public void setGymtype(String gymtype) {
		this.gymtype = gymtype;
	}
	public payment(int id, String name, String email, String gymtype) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.gymtype = gymtype;
	}
	public payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
