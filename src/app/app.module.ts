import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pcsComponent } from './pc/pc.component';
import { AddpcComponent } from './add-pc/AddpcComponent';
import { FormsModule } from '@angular/forms';
import { UpdatepcComponent } from './update-pc/update-pc.component';

@NgModule({
  declarations: [
    AppComponent,
    pcsComponent,
    AddpcComponent,
    UpdatepcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
