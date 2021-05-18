import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './home/trips/trips.component';
import { SearchTripComponent } from './home/search-trip/search-trip.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { GuardianPageComponent } from './guardian-page/guardian-page.component';


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
	},
	{
		path: 'onboarding',
		component: OnboardingComponent
	},
	{ 
		path: 'wheretonow/profile',
		component: ProfilePageComponent,
	  },
	  { 
		path: 'wheretonow/guardians',
		component: GuardianPageComponent,
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
