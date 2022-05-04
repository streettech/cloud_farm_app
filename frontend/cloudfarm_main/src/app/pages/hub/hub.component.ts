import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  farmClick(): void {
    console.log(window.location.href);
    window.location.href = 'http://localhost:51174';
  }

  isLoggedIn(): boolean {
    return this.authService.isUserLoggedIn$.value;
  }
}
