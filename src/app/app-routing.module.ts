import { GuardianComponent } from './guardian/guardian.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './home/trips/trips.component';
import { SearchTripComponent } from './home/search-trip/search-trip.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ProfileComponent } from './profile/profile.component';


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
		path: 'onboarding',
		component: OnboardingComponent
	},
	{ 
		path: 'profile',
		component: ProfileComponent,
	  },
	  { 
		path: 'guardians',
		component: GuardianComponent,
	  },

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
