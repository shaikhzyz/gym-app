import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee } from './employee';
import{HttpClient} from '@angular/common/http'
import { Message } from './message';
import { Gymstaff } from './gymstaff';
import { Pay } from './pay';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  
  private baseURL="http://localhost:81/demo/getall";
  private baseURL1="http://localhost:81/demo/getmessage";
  private baseURL2="http://localhost:81/demo/getstaff";
  private baseURL3="http://localhost:81/demo/getpay";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);

  }


  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }


  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL+id);
  }

updateEmployee(id:number,employee:Employee):Observable<Object>
{
  return this.httpClient.put(this.baseURL+id,employee);

}

deleteEmployee(id :number):Observable<Object>{
  return this.httpClient.delete(this.baseURL + id);
}


getmessageList():Observable<Message[]>{
  return this.httpClient.get<Message[]>(`${this.baseURL1}`);

}


  
createMessage(messages:Message):Observable<Object>{
  return this.httpClient.post(this.baseURL1,messages);
}



deleteMessage(id :number):Observable<Object>{
  return this.httpClient.delete(this.baseURL1 + id);
}



getStaffList():Observable<Gymstaff[]>{
  return this.httpClient.get<Gymstaff[]>(`${this.baseURL2}`);

}
  

createGymStaff(gymstaff:Gymstaff):Observable<Object>{
  return this.httpClient.post(`${this.baseURL2}`,gymstaff);
}


updateStaff(id:number,gymstaff:Gymstaff):Observable<Object>
{
  return this.httpClient.put(this.baseURL2+id,gymstaff);

}


getStaffId(id:number):Observable<Gymstaff>{
  return this.httpClient.get<Gymstaff>(this.baseURL2+id);
}



getpayList():Observable<Pay[]>{
  return this.httpClient.get<Pay[]>(`${this.baseURL3}`);

}


createPay(pay:Pay):Observable<Object>{
  return this.httpClient.post(`${this.baseURL3}`,pay);
}


deletePay(id :number):Observable<Object>{
  return this.httpClient.delete(this.baseURL3 + id);
}
  
}