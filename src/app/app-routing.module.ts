import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeDetailComponent } from './components/bike-detail/bike-detail.component';
import { BikeMarqueComponent } from './components/bike-marque/bike-marque.component';
import { BikePharesComponent } from './components/bike-phares/bike-phares.component';
import { BikeTypeComponent } from './components/bike-type/bike-type.component';
import { MarqueComponent } from './components/marque/marque.component';

import { MotosComponent } from './components/motos/motos.component';
import { TypeComponent } from './components/type/type.component';


const routes: Routes = [
  {path: "", component:BikePharesComponent},
  {path: "motos", component: MotosComponent},
  {path: "type", component: BikeTypeComponent},
  {path: "type/:type", component: TypeComponent},
  {path: "marque", component: BikeMarqueComponent},
  {path: "marque/:marque", component: MarqueComponent},
  {path: "details/:id",component: BikeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
