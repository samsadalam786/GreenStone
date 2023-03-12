import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryModule } from './gallery/gallery.module';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    AppComponent,
 
    HomeComponent,
      ImageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
