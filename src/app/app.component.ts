import { Component } from '@angular/core';
// import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  // readonly VAPID_PUBLIC_KEY = "BANHmqKoVNQJXJRqESngibjZrIvrax8iDrCgQ4VNhZo79bWAUg-3bA3bKP2oM3w66JGEPCCKEwOMs9VncdBJ8UQ";

  // constructor(
  //     private swPush: SwPush,
  //     private newsletterService: NewsletterService) {}

  // subscribeToNotifications() {

  //     this.swPush.requestSubscription({
  //         serverPublicKey: this.VAPID_PUBLIC_KEY
  //     })
  //     .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
  //     .catch(err => console.error("Could not subscribe to notifications", err));
  // }
} 
