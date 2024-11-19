import { Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CatalogRestaurantComponent } from "./home/catalog-restaurant/catalog-restaurant.component";

export const pagesRoutes: Routes = [	
	{ path: 'sign-in', component: LoginComponent },
	{ path: 'sign-up', component: RegisterComponent },
	{ path: 'restaurants', component: CatalogRestaurantComponent }
];