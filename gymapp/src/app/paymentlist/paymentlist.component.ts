import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pay } from '../pay';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {
   pay :Pay[] ;
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {

    this.getFess();
    
  }

  private getFess()
  {
    this.employeeService.getpayList().subscribe(data =>{
      this.pay=data;
    });
  }


  deleteFess(id:number)

  {

    this.employeeService.deletePay(id).subscribe(data =>{
      console.log(data);
      this.getFess();
    })
  }
}
