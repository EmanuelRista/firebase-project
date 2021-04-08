import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../authen/services/login.service';


@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  public loggedUser: any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

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
