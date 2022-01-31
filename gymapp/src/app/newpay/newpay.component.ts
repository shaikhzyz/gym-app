import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpay',
  templateUrl: './newpay.component.html',
  styleUrls: ['./newpay.component.css']
})
export class NewpayComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit(): void {
  }


  go()
  {
    this.route.navigate(['/thanks1']);

  }
}
