import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newfarm',
  templateUrl: './newfarm.component.html',
  styleUrls: ['./newfarm.component.css']
})
export class NewfarmComponent implements OnInit {

  public message_about_farm = "Deploying a new farm is always fun. You should do it more often!"

  constructor() { }

  ngOnInit(): void {
  }

}
