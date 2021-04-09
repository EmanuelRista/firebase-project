import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../authen/services/login.service';
import { ColorService } from '../../../authen/services/color.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  public color: string; //variabile color

  public loggedUser: any;

  constructor(private loginService: LoginService, private colorService: ColorService) {

    //diamo il valore alla variabile

    this.color = 'red';

  }

  ngOnInit(): void {

    this.colorService.$changedColorEvent.subscribe((color) => {
      this.color = color;
    })

    this.loginService.$getLoggedUserEvent.subscribe((user) => {
      this.loggedUser = user;
      console.log('>>>>>', user);
    })

    this.loginService.getUser().then((user) => {
      this.loggedUser = user;
    })

  }

  logOut(): void {
    this.loginService.logOut();
    this.loggedUser = null;
  }

}
