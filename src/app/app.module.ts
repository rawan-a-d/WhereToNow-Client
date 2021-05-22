import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SosComponent } from './sos/sos.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatIconModule} from '@angular/material/icon';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpeechModule } from 'ngx-speech';
import { DataService } from './services/data/data.service';
import { TripService } from './services/trip/trip.service';
import { VoiceRecognitionService } from './services/voice-recognition/voice-recognition.service';
import { HomeComponent } from './home/home.component';
import { SearchTripComponent } from './home/search-trip/search-trip.component';
import { TripsComponent } from './home/trips/trips.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SosConfirmationComponent } from './sos/sos-confirmation/sos-confirmation.component';

// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GuardianComponent } from './guardian/guardian.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SosComponent,
    HomeComponent,
    SearchTripComponent,
    TripsComponent,
    SosConfirmationComponent,
    NavbarComponent,
    ProfileComponent,
    GuardianComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SpeechModule,
    AppRoutingModule,
    RouterModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the app is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),

    MDBBootstrapModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    DataService,
    TripService,
    { provide: 'SPEECH_LANG', useValue: 'en-US' },
    VoiceRecognitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
