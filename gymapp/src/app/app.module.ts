import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HworkComponent } from './hwork/hwork.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MessageComponent } from './message/message.component';
import { MaintainComponent } from './maintain/maintain.component';
import { GymstaffComponent } from './gymstaff/gymstaff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { PaynowComponent } from './paynow/paynow.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { NewpayComponent } from './newpay/newpay.component';
import { Thanks1Component } from './thanks1/thanks1.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HworkComponent,
    OurteamComponent,
    CalculatorComponent,
    ContactusComponent,
    ThanksComponent,
    AdminComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    MessageComponent,
    MaintainComponent,
    GymstaffComponent,
    UpdateStaffComponent,
    PaynowComponent,
    PaymentlistComponent,
    NewpayComponent,
    Thanks1Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
