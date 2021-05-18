import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpeechService } from 'ngx-speech';
import { Subscription } from 'rxjs';
import { VoiceRecognitionService } from '../services/voice-recognition.service';
import { SosConfirmationComponent } from './sos-confirmation/sos-confirmation.component';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css'],
  providers: [VoiceRecognitionService]

})
export class SosComponent implements OnInit {
 	// @Input() pizza?: string;
	safeWord: string = 'SOS';

	subscription: Subscription;


  	constructor(public speech: SpeechService, 
              	public voiceRecognitionService : VoiceRecognitionService,
				public dialog: MatDialog)
 	{
      	this.voiceRecognitionService.init()
  	}

  	ngOnInit(): void {
    	this.startService()

		// Subscribe to voiceRecognitionService
		this.subscription = this.voiceRecognitionService.getInfo()
		.subscribe(value => {
			console.log('Info got changed to: ' + value);

			this.sos();
		})
	}

	sos() {
		console.log(this.voiceRecognitionService.text)
		if(this.voiceRecognitionService.text == this.safeWord) {
			console.log("SOS")
			this.openDialog();
		}
	}

	pressSos() {
		console.log("SOS button was pressed");
		this.openDialog();
	}

	startService(){
		this.voiceRecognitionService.start()
	}

	stopService(){
		this.voiceRecognitionService.stop()
	}

	openDialog() {
		this.dialog.open(SosConfirmationComponent, {
			height: '20%',
			width: 'auto',
		});
	}
}
