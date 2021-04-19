import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemeComponent } from './pages/meme/meme.component';
import { PostMemeComponent } from './pages/meme/post-meme/post-meme.component';
import { SettingComponent } from './pages/setting/setting.component';
import { PostSettingComponent } from './pages/setting/post-setting/post-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    PostMemeComponent,
    SettingComponent,
    PostSettingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
