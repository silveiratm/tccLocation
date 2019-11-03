import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //public slides: IonSlides;
  public nome_cadastro: string = "";
  public matricula_cadastro: string = "";
  public senha_cadastro: string = "";

  constructor(
    private router: Router
  ) {
}

  ngOnInit() {
  }

  register(){
    console.log('OK');
  }

  login(){
    this.router.navigate(['tabs']);
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
