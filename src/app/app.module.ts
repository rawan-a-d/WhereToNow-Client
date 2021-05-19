import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SosComponent } from './sos/sos.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpeechModule } from 'ngx-speech';
import { DataService } from './services/data.service';
import { TripService } from './services/trip.service';
import { VoiceRecognitionService } from './services/voice-recognition.service';
import { HomeComponent } from './home/home.component';
import { SearchTripComponent } from './home/search-trip/search-trip.component';
import { TripsComponent } from './home/trips/trips.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SosConfirmationComponent } from './sos/sos-confirmation/sos-confirmation.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { GuardianPageComponent } from './guardian-page/guardian-page.component';

import { ProfilePageComponent } from './profile-page/profile-page.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    SosComponent,
    HomeComponent,
    SearchTripComponent,
    TripsComponent,
    SosConfirmationComponent,
    OnboardingComponent,
    ProfilePageComponent,
    GuardianPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SpeechModule,
    AppRoutingModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
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
