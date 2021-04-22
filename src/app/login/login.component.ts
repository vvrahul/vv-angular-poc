import { AuthSericeService } from './../auth-serice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup

  constructor(private authService: AuthSericeService,  private router: Router,) { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })
  }

  onLoginSubmit(): void {
    if(this.loginFormGroup.valid){
      // this.authService.login(this.loginFormGroup.value).subscribe((result) => {
      //   alert('Successfully Logged In');
      // })
      localStorage.setItem('isLoggedIn', 'true');
      
      alert('Successfully Logged In');
      this.router.navigate(['dashboard/users']);

    }
  }

}
