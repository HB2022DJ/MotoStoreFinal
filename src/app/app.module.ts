import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikePharesComponent } from './components/bike-phares/bike-phares.component';
import { BikeTypeComponent } from './components/bike-type/bike-type.component';
import { BikeMarqueComponent } from './components/bike-marque/bike-marque.component';
import { MenuComponent } from './components/menu/menu.component';
import { TypeComponent } from './components/type/type.component';
import { MarqueComponent } from './components/marque/marque.component';
import { BikeDetailComponent } from './components/bike-detail/bike-detail.component';
import { MotosComponent } from './components/motos/motos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BikePharesComponent,
    BikeTypeComponent,
    BikeMarqueComponent,
    MenuComponent,
    TypeComponent,
    MarqueComponent,
    BikeDetailComponent,
    MotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
