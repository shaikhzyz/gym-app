package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.member;

public interface memberrepository extends JpaRepository<member, Integer> {
	

}
