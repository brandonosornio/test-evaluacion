import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FakeServiceService } from './services//fake-service.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FakeServiceService, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
