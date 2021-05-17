import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SosComponent } from './sos/sos.component';

import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpeechModule } from 'ngx-speech';
import { DataService } from './services/data.service';
import { TripService } from './services/trip.service';
import { VoiceRecognitionService } from './services/voice-recognition.service';

@NgModule({
  declarations: [
    AppComponent,
    SosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SpeechModule,
  ],
  providers: [
    { provide: 'SPEECH_LANG', useValue: 'en-US' },
    DataService,
    TripService,
    VoiceRecognitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
