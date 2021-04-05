import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {



  constructor(private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {

  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

}
