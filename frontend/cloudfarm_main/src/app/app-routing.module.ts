import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { HubComponent } from './pages/hub/hub.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "hub", component: HubComponent},
  {path: "about", component: AboutComponent},
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
