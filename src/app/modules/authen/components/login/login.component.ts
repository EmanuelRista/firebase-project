import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private colorService: ColorService
  ) { }

  ngOnInit() {
  }

  loginWithGoogle(): void {
    this.loginService.loginWithGoogle();
  }

  logOut(): void {
    this.loginService.logOut();
  }

  //funzione che richiama la funzione "nativa", quella del servizio

  changeMenuColor() {
    const color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    this.colorService.changeMenuColor(color);
  }


}
