import { GuardianComponent } from './guardian/guardian.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './home/trips/trips.component';
import { SearchTripComponent } from './home/search-trip/search-trip.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
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
	},
	{ 
		path: 'profile',
		component: ProfileComponent,
	},
	{ 
		path: 'guardians',
		component: GuardianComponent,
	},
	{
		path: '**',
		component: NotFoundComponent
	}
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
