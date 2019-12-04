import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
//import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //public slides: IonSlides;

  // loginForm = new FormGroup({
  //   registration: new FormControl(''),
  //   password: new FormControl(''),
  // });

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  name: string = "";
  registration: number = null;
  password: string = ""

  users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private http: HttpClient,
    private fBuilder: FormBuilder

  ) {

  }


  ngOnInit() {
    this.registerForm = this.fBuilder.group({
      'name': [null, Validators.required],
      'registration': [null, Validators.required],
      'password': [null, Validators.required]
    })
    this.loginForm = this.fBuilder.group({
      'registration': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }


  async getUsers() {

    await this.userService.getUsers()
      .subscribe(res => {
        this.users = res;
        console.log(this.users);
      }, err => {
        console.log(err);
      });
  }

  async register(form: NgForm) {
    await this.userService.register(form)
      .subscribe(res => {
        console.log(res);
        if (res) {
          this.router.navigate(['home/chart/' + res.registration]);
        }
      }, (err) => {
        console.log(err);
      });
  }

  async login(form: NgForm) {
    await this.userService.login(form)
      .subscribe(res => {
        console.log(res);
        if (res) {
          //console.log("aqui:" + res.registration);
          this.router.navigate(['home/chart/' + res.registration]);
        }
      }, (err) => {
        console.log(err);
      });
  }

  //login() {


  //console.log(JSON.stringify(this.loginForm.value))

  //this.userService.login(JSON.stringify(this.loginForm.value)).subscribe(x => console.log(x));

  // login = async () => {
  //   const response = await fetch(this.apiUrl + '/user');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);

  //   console.log(body)
  //   return body;
  // };



  //this.router.navigate(['home']);
  //}



  //Botões pra fazer ação slide
  /*segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
      
    }
  }
  */

}
