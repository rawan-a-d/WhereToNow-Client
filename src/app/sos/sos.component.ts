import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'ngx-speech';
import { Subscription } from 'rxjs';
import { VoiceRecognitionService } from '../services/voice-recognition.service';

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
              	public voiceRecognitionService : VoiceRecognitionService)
 	{
      	this.voiceRecognitionService.init()
  	}

  	ngOnInit(): void {
    	this.startService()

		// Subscribe to voiceRecognitionService
		this.subscription = this.voiceRecognitionService.getInfo()
		.subscribe(value => {
			console.log('Info got changed to: ' + value);

			this.sos()
		})
	}

	sos() {
		console.log(this.voiceRecognitionService.text)
		if(this.voiceRecognitionService.text == this.safeWord) {
			console.log("SOS")
		}
	}

	pressSos() {
		console.log("SOS button was pressed")
	}

	startService(){
		this.voiceRecognitionService.start()
	}

	stopService(){
		this.voiceRecognitionService.stop()
	}
}
