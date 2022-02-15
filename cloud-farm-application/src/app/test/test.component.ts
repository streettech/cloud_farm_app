import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <div>
    <p>by {{name}}</p>
  </div>
  <input [disabled]="isDisabled" [id]="myId" type="text" value="Enter Name">
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Frank Mukete";
  public myId = "testId";
  public isDisabled = false;
  public testing = {
    "test1": this.isDisabled,
    "test2": !this.isDisabled
  };

  constructor() { }

  ngOnInit(): void {
  }

}
