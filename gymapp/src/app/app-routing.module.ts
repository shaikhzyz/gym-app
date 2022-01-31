import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AboutComponent} from './about/about.component';

import { HomeComponent } from './home/home.component';
import { HworkComponent } from './hwork/hwork.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MessageComponent } from './message/message.component';
import { MaintainComponent } from './maintain/maintain.component';
import { GymstaffComponent } from './gymstaff/gymstaff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { PaynowComponent } from './paynow/paynow.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { NewpayComponent } from './newpay/newpay.component';
import { Thanks1Component } from './thanks1/thanks1.component';
const routes: Routes = [
  {path:"aboutus", component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"hwork",component:HworkComponent},
  {path:"ourteam",component:OurteamComponent},
{path:"cal",component:CalculatorComponent},
{path:"contact",component:ContactusComponent},
{path:"thanks",component:ThanksComponent},
{path:"admin",component:AdminComponent},
{path:"addnew",component:EmployeeListComponent},
{path:"signup" ,component:CreateEmployeeComponent},
{path:"update-employee/:id",component:UpdateEmployeeComponent},
{path:"employee-details/:id",component:EmployeeDetailsComponent},
{path:"message",component:MessageComponent},
{path:"maintain",component:MaintainComponent},
{path:"staff",component:GymstaffComponent},
{path:"update-staff/:id",component:UpdateStaffComponent},
{path:"fess",component:PaynowComponent},
{path:"pay",component:PaymentlistComponent},
{path:"newpay",component:NewpayComponent},
{path:"thanks1",component:Thanks1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
