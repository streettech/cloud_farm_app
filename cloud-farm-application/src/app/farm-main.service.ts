import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FarmMainService {

  constructor() { }

  getFarmsInfo() {
    const farm_info = [
      {"id": 6742411, "name": "Farm1", "type": "simple"},
      {"id": 4745145, "name": "Farm2", "type": "intermidiate"},
      {"id": 1475534, "name": "Farm3", "type": "advanced"},
      {"id": 4755316, "name": "Farm4", "type": "intermidiate"}
    ];
    return farm_info;
  }
}
