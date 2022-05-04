import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { FarmService } from 'src/app/services/farm.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { Farm } from 'src/app/models/Farm';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss']
})
export class FarmsComponent implements OnInit {

  //farms$!: Observable<any[]>;
  //userId!: Pick<User, 'user_id'>;

  constructor(private farmService: FarmService, private authService: AuthService) { }

  ngOnInit(): void {
    //this.farms$ = this.fetchAll();
    //this.userId = this.authService.userId;
  }

  fetchAll(): Observable<any[]> {
    return this.farmService.fetchAll();
  }

}
