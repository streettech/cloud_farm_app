import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public domainName = "cloudfarm.com";
  public pubYear = "2022"; 
  public projectName = "Cloud Farming";
  public ownerName = "Frank Mukete";
  public schoolName = "TTU";

  constructor() { }

  ngOnInit(): void {
  }

}
