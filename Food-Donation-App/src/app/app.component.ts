import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './post/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Food-Donation-App';

  constructor(private router: Router, private formBuilder: FormBuilder, private login:LoginService) { }

  ngOnInit(): void {
    console.log(this.loginForm.controls['username'].value);
    console.log(this.loginForm.controls['password'].value);
  }

  username!: any;
  password!: any;
  id!: number;
  loggedIn: boolean = false;


  loginForm = this.formBuilder.group({
    username: this.formBuilder.control(''),
    password: this.formBuilder.control('')
  })

  onChange() {
    console.log(this.loginForm.controls['username'].value)
  }

  signOut() {
    this.username = null;
    this.password = null;

    this.loginForm.controls['username'].reset();
    this.loginForm.controls['password'].reset();

    this.loggedIn = false;
  }

  async onSubmit() {
    this.username = this.loginForm.controls['username'].value;

    this.password = this.loginForm.controls['password'].value;

    // For demonstration purposes, allow any username and password.
    if (this.username == '' || this.password == '') {
      //alert('Login successful!');
      alert('Please enter a username and password.');

    } else {
      console.log(this.loginForm.controls['username'].value);
      console.log(this.loginForm.controls['password'].value);

      // Navigate to home after successful login
      this.loggedIn = true;

      var response = await this.login.login(this.username, this.password);
      console.log(response);

      this.router.navigateByUrl('/feed');
    }
  }
}
