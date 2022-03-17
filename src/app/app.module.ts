import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarImgUploadCardComponent } from './components/car-img-upload-card/car-img-upload-card.component';
import { UploadComponent } from './layouts/upload/upload.component';
import { StatusComponent } from './layouts/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    CarImgUploadCardComponent,
    UploadComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
