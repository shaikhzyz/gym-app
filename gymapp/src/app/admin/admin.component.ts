import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username!: string;
  password!: string;
  error!: string;

  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onsubmit()
{
  if(this.username=="admin" && this.password=="admin123")
  
  {
    this.route.navigate(['/maintain']);
  }

  else
  {
    this.route.navigate(['admin']);
    this.error="only admin can access";

    
  }

}

}
