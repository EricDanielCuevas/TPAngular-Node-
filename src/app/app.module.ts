import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDemoComponent } from './view-demo/view-demo.component';
import { IterateComponentComponent } from './iterate-component/iterate-component.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { CarrouselCardsComponent } from './componentes/carrousel-cards/carrousel-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewDemoComponent,
    IterateComponentComponent,
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    CarrouselCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
