import { Component, OnInit } from '@angular/core';
import { FarmMainService } from '../farm-main.service';

@Component({
  selector: '[app-farms-indi]',
  templateUrl: './farms-indi.component.html',
  styleUrls: ['./farms-indi.component.css']
})
export class FarmsIndiComponent implements OnInit {

  public farms = [{"id": 1111111, "name": "_name", "type": "_type"}];

  constructor(private _farmService: FarmMainService) { }

  ngOnInit(): void {
    this.farms = this._farmService.getFarmsInfo();
  }

}
