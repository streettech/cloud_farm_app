import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <div>
    <p>test works!</p>
  </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
