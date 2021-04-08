import { Injectable, EventEmitter } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { User } from '../models/user';
import * as LocalForage from 'localforage';

export const USER_KEY = 'userLogged';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public $getLoggedUserEvent: EventEmitter<User>;

  socialUser: SocialUser;
  isLoggedin: boolean;

  constructor(private socialAuthService: SocialAuthService) {

    LocalForage.config({
      name: 'auth'
    })

    this.$getLoggedUserEvent = new EventEmitter();

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
      const myUser = new User();
      myUser.name = user.name;
      LocalForage.setItem(USER_KEY, myUser).then(() => {
        this.$getLoggedUserEvent.emit(user);
      });
    });

  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut() {
    this.socialAuthService.signOut();
    return LocalForage.removeItem(USER_KEY);
  }

  getUser() {
    return LocalForage.getItem(USER_KEY);
  }

}
