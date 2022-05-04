import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NewFarmComponent } from './components/new-farm/new-farm.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { FarmsComponent } from './pages/farms/farms.component';
import { FarmComponent } from './pages/farm/farm.component';
import { LabComponent } from './pages/lab/lab.component';

const routes: Routes = [
  {path: "", component: HomeComponent}, // canActivate: [AuthGuardService]},
  {path: "home", component: HomeComponent}, // canActivate: [AuthGuardService]},
  {path: "farms", component: FarmsComponent}, // canActivate: [AuthGuardService]},
  {path: "newfarm", component: NewFarmComponent}, // canActivate: [AuthGuardService]},
  {path: "farm", component: FarmComponent},
  {path: "lab", component: LabComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
