import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  formValue !: FormGroup;
  email : any;
  password : any;

  
  constructor(private formbuilder : FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      email : [''],
      password : ['']
    })
  }

  login(){
    this.email = this.formValue.value.email;
    this.password = this.formValue.value.password;
    if(this.email == "admin" && this.password == "admin"){
      this.loading = true;
      this.router.navigateByUrl('/covidTracker');
    }else{
      alert("Wrong User Name or Password");
      this.loading = false;
    }
  }

}
