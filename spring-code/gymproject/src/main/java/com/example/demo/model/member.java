package com.example.demo.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class member {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String name;
	
	private String email;
	
	private int mobileno;
	
	private int age;
	
	private String gender;
	
	private String gymtime;

	private int payment;
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
	public int getMobileno() {
		return mobileno;
	}
	public void setMobileno(int mobileno) {
		this.mobileno = mobileno;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getGymtime() {
		return gymtime;
	}
	public void setGymtime(String gymtime) {
		this.gymtime = gymtime;
	}
	public int getPayment() {
		return payment;
	}
	public void setPayment(int payment) {
		this.payment = payment;
	}
	public member(String name, String email, int mobileno, int age, String gender, String gymtime, int payment) {
		super();
		this.name = name;
		this.email = email;
		this.mobileno = mobileno;
		this.age = age;
		this.gender = gender;
		this.gymtime = gymtime;
		this.payment = payment;
	}
	public member() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
