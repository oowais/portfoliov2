import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StairsLoaderComponent } from './stairs-loader/stairs-loader.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ButtonComponent } from './button/button.component';
import { FullPageNavComponent } from './full-page-nav/full-page-nav.component';
import { AboutmeCardComponent } from './aboutme-card/aboutme-card.component';
import { FullpageScrollComponent } from './fullpage-scroll/fullpage-scroll.component';
import { NeonButtonComponent } from './neon-button/neon-button.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    StairsLoaderComponent,
    TimelineComponent,
    ButtonComponent,
    FullPageNavComponent,
    AboutmeCardComponent,
    FullpageScrollComponent,
    NeonButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
