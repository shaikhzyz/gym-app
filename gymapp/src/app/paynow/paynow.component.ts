import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Pay } from '../pay';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.css'],
 
})
export class PaynowComponent implements OnInit {
  

  pay:Pay= new Pay();
  constructor(private employeeSeervice:EmployeeService,private router:Router) { 

   
  }

  ngOnInit(): void {
  }


  savemessage()
  {
    this.employeeSeervice.createPay(this.pay).subscribe(data =>{
      console.log(data);
      this.gotothanks();
    });
  }

  gotothanks()
  {
    this.router.navigate(['/newpay']);
  }


  login()
  {
    
    this.savemessage();

    console.log(this.pay);
    
  
  
  }





    
    
  }


 
