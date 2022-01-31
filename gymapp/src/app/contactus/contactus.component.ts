import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Message } from '../message';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  message:Message= new Message();


  
  
 
  

  constructor(private employeeSeervice:EmployeeService , private router:Router  ) {}

  ngOnInit(): void {
  }

  savemessage()
  {
    this.employeeSeervice.createMessage(this.message).subscribe(data =>{
      console.log(data);
      this.gotothanks();
    });
  }

  gotothanks()
  {
    this.router.navigate(['/thanks1']);
  }


  login()
  {
    
    this.savemessage();

    console.log(this.message);
    
  
  
  }

}
