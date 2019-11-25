import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
//import { IonSlides } from '@ionic/angular';
//import {userService} from '../services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //public slides: IonSlides;
  public user = {
    name_register: "",
    registration_register: "",
    password_register: ""
  }

  public registerForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,

    private fBuilder: FormBuilder) {
      this.registerForm = this.fBuilder.group({
        'name_register': [this.user.name_register, Validators.compose([
          Validators.required
        ])],
        'registration_register': [this.user.registration_register, Validators.compose([
          Validators.required
        ])],
        'password_register': [this.user.password_register, Validators.compose([
          Validators.required
        ])]
      })
}

  ngOnInit() {
  }

  register(){
    //Validação
    this.registerForm.valid


    const data = this.registerForm.value;

    console.log(data);
    //userService.post('/user', data)

  }

  login(){

    this.userService.login();


    //this.router.navigate(['home']);
  }

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
