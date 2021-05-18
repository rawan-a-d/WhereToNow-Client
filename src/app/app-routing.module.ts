import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './home/trips/trips.component';
import { SearchTripComponent } from './home/search-trip/search-trip.component';


const appRoutes: Routes = [
	// {
	// 	path: '',
	// 	redirectTo: '/recipes',
	// 	pathMatch: 'full'
	// },
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'trips',
				component: TripsComponent,
			},
			{
				path: 'search',
				component: SearchTripComponent
			}
		]
	}

// {
//   path: '**',
//   component: NotFoundComponent
// }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
