import { Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CatalogRestaurantComponent } from "./home/catalog-restaurant/catalog-restaurant.component";
import { ReservationFormComponent } from "./home/reservation/reservation-form/reservation-form.component";
import { ReservationHistoryComponent } from "./home/reservation/reservation-history/reservation-history.component";
import { ReservationConfirmationComponent } from "./home/reservation/reservation-confirmation/reservation-confirmation.component";


export const pagesRoutes: Routes = [	
	{ path: 'sign-in', component: LoginComponent },
	{ path: 'sign-up', component: RegisterComponent },
	{ path: 'restaurants', component: CatalogRestaurantComponent },
	{ path: 'reservation',
		children: [
			{ path: 'form', component: ReservationFormComponent },
			{ path: 'history', component: ReservationHistoryComponent },
			{ path: 'confirmation', component: ReservationConfirmationComponent }
		]
	}
];