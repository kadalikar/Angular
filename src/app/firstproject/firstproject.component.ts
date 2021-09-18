import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../user';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { EmployeeModel } from '../employee-module';
import { MatPaginator } from '@angular/material/paginator';

import { Router } from '@angular/router';
 
@Component({
  selector: 'app-firstproject',
  templateUrl: './firstproject.component.html',
  styleUrls: ['./firstproject.component.css']
})
export class FirstprojectComponent implements OnInit {
   showadd:boolean;
   showupdate:boolean;
  alert:boolean = false
   employeedeleted:boolean=false
  formvalue: FormGroup;
   user: User [ ] = [ ];
   employeeData:any;
   employeeobj:EmployeeModel = new EmployeeModel();
  constructor(public service:ServiceService ,
    private formbulider:FormBuilder ,private route:Router) { }
   @ViewChild(MatPaginator) paginator:MatPaginator;
  ngOnInit() {
     
    this.getallemployee();
    // this.employeeData.paginator= this.paginator;
  this.service.getusers().subscribe((response) => {
    this.user = response;
  });
     
    
    this.formvalue = this.formbulider.group({
      id:[''],
      firstname:[''],
      lastname:[''],
      email:[''],
      number:['']
    })

  }
  
  
  getallemployee(){
    this.service.getusers()
    .subscribe( res => {
      this.employeeData = res;
    })
  }
  sure(){
    alert("Are you Sure");
  }

 ok(){ 
    this.route.navigate(['login']);
}
clickaddemployee(){

  this.formvalue.reset();
  this.showadd=true;
  this.showupdate=false;


}

  postemployeedetails(){
    this.employeeobj.id = this.formvalue.value.id;
    this.employeeobj.firstname = this.formvalue.value.firstname;
    this.employeeobj.lastname = this.formvalue.value.lastname;
    this.employeeobj.email = this.formvalue.value.email;
    this.employeeobj.number = this.formvalue.value.number;

    this.service.postEmployee(this.employeeobj)
    .subscribe(res => 
      {
        console.log(res);
        alert("employee Added Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formvalue.reset();
        this.getallemployee();
      },
      err =>
      {
        alert('something went wrong')
      })
      
  } 


  deleteEmployee(users:any ){
    this.service.deleteEmployee(users.id)
    .subscribe(res => {
      
     alert("Employee Deleted")
      
     this.service.getusers().subscribe(response => {
    this.user = response;
   
  });
  this.getallemployee();
    })
  }


  onedit(users:any){
    this.showadd=false;
    this.showupdate=true;
    this.employeeobj.id = users.id;
    this.formvalue.controls['id'].setValue(users.id);
    this.formvalue.controls['firstname'].setValue(users.firstname);
    this.formvalue.controls['lastname'].setValue(users.lastname);
    this.formvalue.controls['email'].setValue(users.email);
    this.formvalue.controls['moblie'].setValue(users.number);
   
  
  }

  updateemployeedetails(){
    this.employeeobj.id = this.formvalue.value.id;
    this.employeeobj.firstname = this.formvalue.value.firstname;
    this.employeeobj.lastname = this.formvalue.value.lastname;
    this.employeeobj.email = this.formvalue.value.email;
    this.employeeobj.number = this.formvalue.value.number;
    this.service.updateemploye(this.employeeobj,this.employeeobj.id)
    .subscribe( res =>
      {
        alert("update succesfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formvalue.reset();
        this.service.getusers().subscribe(response => {
          this.user = response;
        });
        this.getallemployee();
      })
  }



  countryname = new FormControl();
  onclick(){
    this.countryname.setValue('India');
  }

 

}
