import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Message } from '../message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  messages :Message[] ;

  constructor(private employeeService :EmployeeService) { }

  ngOnInit(): void {
this.getmessage();
  }
  private getmessage()
  {
    this.employeeService.getmessageList().subscribe( data =>{
      this.messages=data;

    });
  }

  


  delete(id:number)
  {
    this.employeeService.deleteMessage(id).subscribe(data =>{
      console.log(data);
      this.getmessage();
    })

  }

}
