import { Component, OnInit } from '@angular/core';

import { Observable, timer, Subscription, map } from 'rxjs';

import { FarmService } from 'src/app/services/farm.service';
import { Sensors } from 'src/app/models/Sensors';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {

  sensors!: Sensors;
  tima!: Subscription;

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
    this.tima = timer(0, 5000).pipe( 
      map(() => { 
        this.fetchfarm(); 
      }) 
    ).subscribe();
  }

  fetchfarm() {
    this.farmService.fetchFarm().subscribe({
      next: sensors => {
        this.sensors = sensors
      }
    });
  }

  ngOnDestroy(): void { 
    this.tima.unsubscribe(); 
  } 
}
