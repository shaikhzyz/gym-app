package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.message;
import com.example.demo.model.payment;

public interface paymentrepository extends JpaRepository<payment, Integer>  {

}
