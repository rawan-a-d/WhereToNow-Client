import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  //trips: Trip[]

  constructor(private route: ActivatedRoute,
              private tripService: TripService) { }

  ngOnInit(): void {
    var from = this.route.snapshot.queryParamMap.get('from');
    var to = this.route.snapshot.queryParamMap.get('to');

    console.log("FROM " + from + ", TO " + to)

    this.tripService.getTrips(from, to)
			.subscribe(data => {
				console.log(data)

				// render trips

			})
  }

}
