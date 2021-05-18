import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SosComponent } from './sos/sos.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpeechModule } from 'ngx-speech';
import { DataService } from './services/data.service';
import { TripService } from './services/trip.service';
import { VoiceRecognitionService } from './services/voice-recognition.service';
import { HomeComponent } from './home/home.component';
import { SearchTripComponent } from './home/search-trip/search-trip.component';
import { TripsComponent } from './home/trips/trips.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SosComponent,
    HomeComponent,
    SearchTripComponent,
    TripsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
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
