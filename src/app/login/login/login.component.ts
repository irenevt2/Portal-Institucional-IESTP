import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/modelos/login.interface';
import { ApiService } from '../../services/api/api.service';
import { ResponseI } from 'src/app/modelos/response.interface';
import { Paciente } from 'src/app/modelos/paciente.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    usuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })
  
  constructor(private api:ApiService, private router:Router) { }
  
  ngOnInit(): void {
    this.checkLocalStorage();
  }
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  error = "";
  
  onSubmit(form:LoginI){
    if(this.loginForm.valid){
      this.error = "";
      this.api.loginByEmail(form).subscribe({
        next: (data:any)=>{
          console.log(data);
          if(data.status == "error"){
            this.error = data.result.error_msg;
          }else{
            let dataResponse:ResponseI = data;
              if(dataResponse.status="ok"){
                localStorage.setItem("token", dataResponse.result.token);
                this.router.navigate(['dashboard']);
              }
          }
        },
        error: (error)=>{
          console.log(error)
          console.log(error.error.result.error_msg)
          this.error = error.error.result.error_msg;
        }
      })
    }
  }

  // // onSubmit(form:LoginI){
  // //   if(this.loginForm.valid){
  // //     this.error = "";
  // //     this.api.loginByEmail(form).subscribe({
  // //       next: (result:any)=>{
  // //         console.log(result);
  // //         if(result.status == "error"){
  // //           this.error = result.result.error_msg;
  // //         }else{

  // //         }
  // //       },
  // //       error: (error)=>{
  // //         console.log(error)
  // //         console.log(error.error.result.error_msg)
  // //         this.error = error.error.result.error_msg;
  // //       }
  // //     })
  // //   }
  // // }

}
