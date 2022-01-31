import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Gymstaff } from '../gymstaff';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {


  id:number;
  gymstaff:Gymstaff= new Gymstaff() ;
  constructor(private employeeService: EmployeeService,private route:ActivatedRoute,private router:Router) { 


   
  }
  ngOnInit(): void {

    this.id= this.route.snapshot.params['id'];

    this.employeeService.getStaffId(this.id).subscribe(data =>{
      console.log(data);
      this.gymstaff=data;
    });
  


  
  }



  onsubmit()
  {

    this.employeeService.updateStaff(this.id,this.gymstaff).subscribe(data =>{
      this.goToStaffList();

    });
  }

  goToStaffList()
  {
    this.router.navigate(['/staff']);

  }

}


