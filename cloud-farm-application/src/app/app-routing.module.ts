import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FarmComponent } from './farm/farm.component';
import { FarmsIndiComponent } from './farms-indi/farms-indi.component';
import { HomeComponent } from './home/home.component';
import { HubComponent } from './hub/hub.component';
import { LabComponent } from './lab/lab.component';
import { NewfarmComponent } from './newfarm/newfarm.component';
import { SpecComponent } from './spec/spec.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { MessagingComponent } from './messaging/messaging.component';
import { FarmIndiComponent } from './farm-indi/farm-indi.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hub', component: HubComponent},
  {path: 'farm', component: FarmComponent},
  {path: 'newfarm', component: NewfarmComponent},
  {path: 'lab', component: LabComponent},
  {path: 'spec', component: SpecComponent},
  {path: 'farms_indi', component: FarmsIndiComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'spec', component: SpecComponent},
  {path: 'messaging', component: MessagingComponent},
  {path: 'farm-indi', component: FarmIndiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, AboutComponent, HubComponent, 
  FarmComponent, NewfarmComponent, LabComponent, 
  SpecComponent, FarmsIndiComponent, DocumentationComponent,
  MessagingComponent, FarmIndiComponent
]
