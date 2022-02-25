import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public project_explainer_log = 
  " \
  The Cloud Farm Project is the application of cloud computing and IoT to configure, monitor, and maintain automated greenhouses. \
  This is done by means of communication between the cloudfarm.dev database and connected microcontrollers that handle the getting and sending of sensory data.\
  Each microcontroller is considered a \"farm\" and is granted a secure connection and tag. \
  A farm collects data via sensors connected to it and sends this data via wifi to the cloudfarm.dev database. \
  User control data is sent to the farm when entries are made in the farm and lab tabs. \
  The farm and lab tabs allow full control over a registered farm. \
  ";

  public developer_explainer_log = 
  " \
  My name is Frank Mukete. I am a student at Texas Tech University, majoring in Computer Engineering. \
  I found interest in cloud computing and decided on this project as a grand hail-mary to increase my expertise in \
  the area. I have a background in embedded systems from my experience freelancing as an Embedded Systems Engineer \
  on Upwork and from previous school projects--making working on the greenhouse relatively simple. \
  ";

  public dev_name = "Frank Mukete";
  public dev_email = "muketefrank@cloudfarm.dev";
  public dev_phone = "999-999-9999";
  public dev_linkedIn = "frank.mukete@LinkedIn";

  constructor() { }

  ngOnInit(): void {
  }

}
