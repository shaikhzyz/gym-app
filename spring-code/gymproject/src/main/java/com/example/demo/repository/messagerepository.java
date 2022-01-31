package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.model.message;

public interface messagerepository extends JpaRepository<message, Integer> {

}
