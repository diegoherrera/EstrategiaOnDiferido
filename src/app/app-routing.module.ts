import { NgModule }      from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { PageNotFoundComponent } 
from './page-not-found/page-not-found.component';
const routes: Routes = [
	{
	   path: 'country',
	   loadChildren: () => import('./country/country.module').then(m => m.CountryModule)
	},
	{
		path: 'person',
		loadChildren: () => import('./person/person.module').then(m => m.PersonModule)
	 },
	 {
		path: 'address',component: AddressComponent
	 },	
	{
	   path: '', redirectTo: '/country',	   pathMatch: 'full'
	},
        {
	   path: '**',
	   component: PageNotFoundComponent 
        }	
];
@NgModule({
  imports: [ 
          RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules
		 }) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 