import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataFormComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
