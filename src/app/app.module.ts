import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChatLayoutComponent } from './chat-layout/chat-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChatLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
