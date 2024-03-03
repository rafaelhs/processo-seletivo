import { Component, OnInit} from '@angular/core';
import { User } from 'src/shared/models/user';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../Services/local-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  constructor(
    private services: UserService, 
    private router: Router,
    private storageServices: LocalStorageService) { } 
  
  ngOnInit(): void {
    this.loginForm.controls.name.disable();
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  isSignUp: boolean = false;
  loginError: string = "";

  handleSubmit() {
    let user: User = new User(
      null, 
      this.loginForm.get('name')?.value, 
      this.loginForm.get('email')?.value, 
      this.loginForm.get('password')?.value);

    if(this.isSignUp) {
      this.services.saveUser(user).subscribe({ 
        next: (data: any) => {
          this.storageServices.setItem('userId', data.id);
          this.router.navigate(['contacts'])
        },
        error: error => {
          if(error.status === 409) {
            this.loginError = "Email em uso"
          }
        }   
      })
    } else {
      this.services.login(user).subscribe({
        next: (data: any) => {
        this.storageServices.setItem('userId', data.id);
        this.router.navigate(['contacts']);
        },
        error: error => {
          if(error.status === 403) {
            this.loginError = "Usuário ou senha inválidos"
          }
        }
      });
    }
  }

  toggleState() {
    this.isSignUp = !this.isSignUp;
    this.loginError = "";
    if(this.isSignUp) {
      this.loginForm.controls.name.enable();
    } else {
      this.loginForm.controls.name.disable();
    }
  }

  emailValidation() {
    if(this.loginForm.get("email")?.invalid 
      && (this.loginForm.get("email")?.touched
      || this.loginForm.get("email")?.dirty
    )) {
      if(this.loginForm.get("email")?.hasError('required')) return "Campo obrigatório"
      if(this.loginForm.get("email")?.hasError('email')) return "E-mail inválido"
    }
    return false;
  }

  genericValidation(field: string) {
    if(this.loginForm.get(field)?.invalid 
      && (this.loginForm.get(field)?.touched
      || this.loginForm.get(field)?.dirty
    )) {
      return "Campo obrigatório"
    }
    return false;
  }
}
