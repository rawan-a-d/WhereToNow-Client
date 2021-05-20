import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {
	// allows other components to subscribe to VoiceRecognitionService
	info = new BehaviorSubject('information');

	// Call webkitSpeechRecognition API
	recognition =  new webkitSpeechRecognition();
	isStoppedSpeechRecog = false;
	public text = '';
	tempWords;

	constructor() { }

	init() {
		// Initialize recognition
		this.recognition.interimResults = true;
		this.recognition.lang = 'en-US'; // lang Arabic (UAE) ar-AE

		this.recognition.addEventListener('result', (e) => {
			const transcript = Array.from(e.results)
				.map((result) => result[0])
				.map((result) => result.transcript)
				.join('');

			this.text = transcript;

			this.setInfo("Text changed to " + this.text)
		});
	}

	// Start voice recognition continuously
	start() {
		this.isStoppedSpeechRecog = false;
		this.recognition.start();
		console.log("Speech recognition started")
			this.recognition.addEventListener('end', (condition) => {
			if (this.isStoppedSpeechRecog) {
				this.recognition.stop();
				console.log("End speech recognition")
			} else {
				this.wordConcat()
				this.recognition.start();
			}
		});
	}

	// Stop voice recognition
	stop() {
		this.isStoppedSpeechRecog = true;
		this.wordConcat()
		this.recognition.stop();
		console.log("End speech recognition")
	}

	wordConcat() {
		this.text = this.tempWords;
		this.tempWords = '';
	}

	getInfo(): Observable<string> {
		return this.info.asObservable();
	}

	getInfoValue(): string {
		return this.info.getValue();
	}

	setInfo(val: string) {
		this.info.next(val);
	}
}
