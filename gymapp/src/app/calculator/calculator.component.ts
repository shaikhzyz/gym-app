import { Component, OnInit } from '@angular/core';
import { data } from '../../see';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

height:string;
result:number;
text:string;
text1:string;
text2:string;
text3:string;
sum:string;
weight:string;
name:string;



  
  constructor() { 
    this.height="";
    this.weight="";
    this.result=0;
    this.sum="";
    this.text="";
    this.text1="";
    this.text2="";
    this.text3="";
    this.name="";

  }

  ngOnInit(): void {
    
    
  }

 
  addnumber()
  {
    //[weight (kg) / height (cm) / height (cm)] x 10,000
    this.result=parseInt(this.weight)/parseInt(this.height)/parseInt(this.height)*10000;
    this.sum=this.result.toFixed(2);
    this.text="Underweight = <18.5";
    this.text1="Normal weight = 18.5–24.9";
    this.text2="Overweight = 25–29.9 ";
    this.text3="Obesity = BMI of 30 or greater";
    this.name="BMI CATEGORY";
  }

}
