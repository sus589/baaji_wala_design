import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { CommonModule, Location } from '@angular/common';
import { DatahandlersevService } from '../services/datahandlersev.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [LeftSidebarComponent, ReactiveFormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  isSidebarOpen = false;
  loginForm!: FormGroup;

  constructor(private sidebarService: SidebarService, private location: Location, private dataSev: DatahandlersevService, private fb: FormBuilder , private router : Router) {
    this.sidebarService.sidebarOpen$
      .subscribe(state => this.isSidebarOpen = state);
  }

  goBack() {
    this.location.back();
  }


 ngOnInit(): void {
   this.loginForm = this.fb.group({
    userid: ['', Validators.required],
    pass: ['', Validators.required],
    validCode: ['', [Validators.required,Validators.maxLength(4)]]
   })
  }
  submit(){
   const payload ={
     userId: this.loginForm.value.userid,
     pass:this.loginForm.value.pass,
     validCode:this.loginForm.value.validCode
   }

   this.dataSev.login(payload).subscribe({
    next : (res:any)=>{
      console.log(res);
      localStorage.setItem('token' ,res.password);
      localStorage.setItem('userName',res.userid)
      
      this.router.navigate(['dashboard/home']);
    },
    error: ()=>{
      console.log('wrong credential');
    }
   })
  }
}


