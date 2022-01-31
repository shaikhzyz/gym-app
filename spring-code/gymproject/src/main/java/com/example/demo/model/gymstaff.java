package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class gymstaff {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	private String address;
	private int mobileno;
	private String qualification;
	private String time;
	private int salary;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getMobileno() {
		return mobileno;
	}
	public void setMobileno(int mobileno) {
		this.mobileno = mobileno;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	public gymstaff(int id, String name, String address, int mobileno, String qualification, String time, int salary) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.mobileno = mobileno;
		this.qualification = qualification;
		this.time = time;
		this.salary = salary;
	}
	public gymstaff() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
