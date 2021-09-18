import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private bulider:FormBuilder,private route:Router,private activate:ActivatedRoute) { }
   alert:boolean = false
  ngOnInit()
   {
      this.registerForm = this.bulider.group({
          name:['kadalikar',[Validators.required
          ,Validators.minLength(4)]],
          password:['12345',[
            Validators.required,Validators.minLength(5)
          ]],
          Email:['kadalikar@gmail.com',
          [Validators.required,
            Validators.email
          ]],
          number:['8297762246',
          [Validators.required,
            Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
          ]]

      })
    

  }
 
  
  submit(){
    console.log(this.registerForm.value);
    this.registerForm.reset();
   
   
  }
  ok(){
    //  this.route.navigate(['employeedata']);
     this.alert =true;
     setTimeout(() => {
      this.route.navigate(['employeedata']);
  }, 1000);  //5s
  }
   
  get name(){
     return this.registerForm.get('name');
  }
  get password(){
     return this.registerForm.get('password');
  }
  get email(){
     return this.registerForm.get('Email');
  }
  get number(){
     return this.registerForm.get('number');
  }

}
