package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.gymstaff;


public interface gymstaffrepository extends JpaRepository<gymstaff, Integer>  {

}
