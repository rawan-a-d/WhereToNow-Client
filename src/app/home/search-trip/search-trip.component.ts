import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: ['./search-trip.component.css']
})
export class SearchTripComponent implements OnInit {
	tripSearchForm = new FormGroup({
		from: new FormControl(''),
		to: new FormControl(''),
	});

	constructor(private tripService: TripService) { }

	ngOnInit(): void {

	}

	get from(){
		return this.tripSearchForm.get('from')
	}

	get to(){
		return this.tripSearchForm.get('to')
	}

	search() {
		this.tripService.getTrips(this.from.value, this.to.value)
			.subscribe(data => {
				console.log(data)
				
				// render trips
			})
	}

}
