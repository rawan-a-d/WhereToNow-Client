import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from 'src/app/services/trip/trip.service';

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

	constructor(private router: Router,
              	private route: ActivatedRoute,) { }

	ngOnInit(): void {

	}

	get from(){
		return this.tripSearchForm.get('from')
	}

	get to(){
		return this.tripSearchForm.get('to')
	}

	search() {
		// Navigate to trips page
		this.router.navigate(['../trips'], {relativeTo: this.route, 
											queryParams: {from: this.from.value, to: this.to.value}
		});
	}

}
