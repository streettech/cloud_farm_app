import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { FarmsIndiComponent } from './farms-indi/farms-indi.component';
import { FarmMainService } from './farm-main.service';
import { DocumentationComponent } from './documentation/documentation.component';
import { DummyComponent } from './dummy/dummy.component';
import { MessagingComponent } from './messaging/messaging.component';
import { FarmIndiComponent } from './farm-indi/farm-indi.component';

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
    FarmsIndiComponent,
    DocumentationComponent,
    DummyComponent,
    MessagingComponent,
    FarmIndiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FarmMainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
