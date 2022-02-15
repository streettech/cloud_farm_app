import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HubComponent } from './hub/hub.component';
import { FarmComponent } from './farm/farm.component';
import { NewfarmComponent } from './newfarm/newfarm.component';
import { LabComponent } from './lab/lab.component';
import { SpecComponent } from './spec/spec.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    HubComponent,
    FarmComponent,
    NewfarmComponent,
    LabComponent,
    SpecComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
