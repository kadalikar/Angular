import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from  'rxjs/operators';
 
 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { 
  }  
   
  // public url :string  = "https://61418fe2357db50017b3db5d.mockapi.io/api/d1/data_fetch";
  // public url :string = "http://localhost:3000/users";
   
  
  postEmployee(data:any){
    return this.http.post<any>("http://localhost:3000/users",data)
    .pipe(map ((res:any) => {
         return res;
    })) 
  }
  getusers() 
  {
    return this.http.get<any>("http://localhost:3000/users").
    pipe(map ((res:any) => {
      return res;
    }))
  }
  updateemploye(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/users/"+id,data)
    .pipe(map ((res:any) => {
         return res;
    })) 
  }
  deleteEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/users/"+id)
    .pipe(map ((res:any) => {
         return res;
    })) 
  }
  
  
  }
  




