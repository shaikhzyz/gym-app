import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Gymstaff } from '../gymstaff';

@Component({
  selector: 'app-gymstaff',
  templateUrl: './gymstaff.component.html',
  styleUrls: ['./gymstaff.component.css']
})
export class GymstaffComponent implements OnInit {

  gymstaffs:Gymstaff[];
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getStaff();
  }


   getStaff()
  {
    this.employeeService.getStaffList().subscribe(data =>{
      this.gymstaffs=data;
    });
  }


  updatestaff(id:number)
  {

    this.router.navigate(['update-staff',id]);

  }


  deletestaff(id:number)
  {

  }

}
