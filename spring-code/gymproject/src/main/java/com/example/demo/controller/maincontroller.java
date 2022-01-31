package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.gymstaff;
import com.example.demo.model.member;
import com.example.demo.model.message;
import com.example.demo.model.payment;
import com.example.demo.repository.gymstaffrepository;
import com.example.demo.repository.memberrepository;
import com.example.demo.repository.messagerepository;
import com.example.demo.repository.paymentrepository;
@CrossOrigin(origins ="http://localhost:4200" )
@RestController
@RequestMapping(path="/demo")
public class maincontroller {
	@Autowired
	
	private memberrepository memberrepository;
	@Autowired
	private messagerepository messagerepository;
	
	@Autowired
	private gymstaffrepository gymrepository;
	
	
	@Autowired
	private paymentrepository paymentrepository;
	
	@CrossOrigin(origins ="http://localhost:4  200" )
	@GetMapping(path="/getall")
	public List<member> getallmember()
	{
		return memberrepository.findAll();
	}
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@PostMapping("/getall")
	public member createmember (@RequestBody member member)
	{
		return memberrepository.save(member);
	}
	
	
	
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@GetMapping("/getall{id}")
	public ResponseEntity <member> getmemberbyid(@PathVariable int id) 
	{
		member member= memberrepository.findById(id).orElseThrow();
		return ResponseEntity.ok(member);
		
	}
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@PutMapping("/getall{id}")
	public ResponseEntity<member> updatemember(@PathVariable  int id,@RequestBody member members) {{
		
		
		member member= memberrepository.findById(id).orElseThrow();
		
		
		
		member.setName(members.getName());
		
		member.setEmail(members.getEmail());
		member.setMobileno(members.getMobileno());
		member.setAge(members.getAge());
		member.setGender(members.getGender());
		member.setGymtime(members.getGymtime());
		member.setPayment(members.getPayment());
		member updatemember =memberrepository.save(member);
		
		return ResponseEntity.ok(updatemember);
		
		
		
	}

	}
	@CrossOrigin(origins ="http://localhost:4200" )
	@DeleteMapping("/getall{id}")
	public ResponseEntity< Map<String, Boolean>> deleteEmployee(@PathVariable  int id)
	{
		

		member member= memberrepository.findById(id).orElseThrow();
		memberrepository.delete(member);
		Map<String, Boolean> response= new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@GetMapping(path="/getmessage")
	public List<message> getallmessage()
	{
		return  messagerepository.findAll();
				
	
	}
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@PostMapping("/getmessage")
	public message createmessage (@RequestBody message message)
	{
		return messagerepository.save(message);
	}
	
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@DeleteMapping("/getmessage{id}")
	public ResponseEntity< Map<String, Boolean>> deleteMessage(@PathVariable  int id)
	{
		

		message message= messagerepository.findById(id).orElseThrow();
		messagerepository.delete(message);
		Map<String, Boolean> response= new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@GetMapping(path="/getstaff")
	public List<gymstaff> getallstaff()
	{
		return gymrepository.findAll();
	}
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@PostMapping("/getstaff")
	public gymstaff createstaff (@RequestBody gymstaff gymstaff)
	{
		return gymrepository.save(gymstaff);
	}
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@GetMapping("/getstaff{id}")
	public ResponseEntity <gymstaff> getstaffbyid(@PathVariable int id) 
	{
		gymstaff gymstaff= gymrepository.findById(id).orElseThrow();
		return ResponseEntity.ok(gymstaff);
		
	}
	
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@PutMapping("/getstaff{id}")
	public ResponseEntity<gymstaff> updatestaff(@PathVariable  int id,@RequestBody gymstaff  gymstaff) {{
		
		
		gymstaff gymstaff2=gymrepository.findById(id).orElseThrow();
		
		
		
		gymstaff2.setName(gymstaff.getName());
		
		gymstaff2.setAddress(gymstaff.getAddress());
		gymstaff2.setMobileno(gymstaff.getMobileno());
		gymstaff2.setQualification(gymstaff.getQualification());
		gymstaff2.setTime(gymstaff.getTime());
		gymstaff2.setSalary(gymstaff.getSalary());
	
		gymstaff updatemember =gymrepository.save(gymstaff2);
		
		return ResponseEntity.ok(updatemember);
		
		
		
	}

	}
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@GetMapping(path="/getpay")
	public List<payment> getallpayment()
	{
		return paymentrepository.findAll();
	}
	
	
	

	@CrossOrigin(origins ="http://localhost:4200" )
	@PostMapping("/getpay")
	public payment createpay (@RequestBody payment payment)
	{
		return paymentrepository.save(payment);
	}
	
	
	
	
	@CrossOrigin(origins ="http://localhost:4200" )
	@DeleteMapping("/getpay{id}")
	public ResponseEntity< Map<String, Boolean>> deletePay(@PathVariable  int id)
	{
		

		payment payment= paymentrepository.findById(id).orElseThrow();
		paymentrepository.delete(payment);
		Map<String, Boolean> response= new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
