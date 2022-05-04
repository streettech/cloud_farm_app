import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn, NgForm } from '@angular/forms';

import { Farm } from 'src/app/models/Farm';

@Component({
  selector: 'app-new-farm',
  templateUrl: './new-farm.component.html',
  styleUrls: ['./new-farm.component.scss']
})
export class NewFarmComponent implements OnInit {

  @ViewChild("formDirective") formDirective!: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();

  newFarmForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.newFarmForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required]),
      ip: new FormControl("", [Validators.required, Validators.minLength(2)]),
      physical_address: new FormControl("", [Validators.minLength(2)]),
      city: new FormControl("", [Validators.minLength(2)]),
      state: new FormControl(""),
      country: new FormControl("", [Validators.minLength(2)]),
      user_status: new FormControl("inactive")
    })
  }

  register(formData: Pick<Farm, "name" | "farm_status">): void {
    console.log(formData);
    this.create.emit(null);
    this.newFarmForm.reset();
    this.formDirective.resetForm();
  }

}
