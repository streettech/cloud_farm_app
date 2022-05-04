import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logged = false;

  constructor() { }

  loggedin() {
    this.logged = true;
  }

  loggedout() {
    this.logged = false;
  }

}
