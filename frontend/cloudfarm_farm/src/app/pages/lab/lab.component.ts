import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Valves } from 'src/app/models/Valves';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  valveForm!: FormGroup;

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
    this.valveForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      water_percent: new FormControl('0'),
      water_toggle: new FormControl('false'),
      light_toggle: new FormControl('false')
    });
  }

  sendData(): void {
    this.farmService
    .setFarm(this.valveForm.value)
    .subscribe((msg) => console.log(msg));
  }

}
