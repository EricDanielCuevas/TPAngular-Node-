import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViewDemoComponent } from './view-demo/view-demo.component';
import { IterateComponentComponent } from './iterate-component/iterate-component.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { CarrouselCardsComponent } from './componentes/carrousel-cards/carrousel-cards.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { BuscarGolosinaComponent } from './buscar-golosina/buscar-golosina.component';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './contacto/contacto.component';
import { CandyComponent } from './candy/candy.component';
import { PromosComponent } from './promos/promos.component';



const appRoutes:Routes=[
  {path:'',component:HomeComponent },
  {path:'login',component:LoginComponent },
  {path:'carrito',component: CarritoComponent},
  {path:'buscar-golosina',component: BuscarGolosinaComponent},
  {path: 'view', component: ViewDemoComponent},
  {path: 'iterate', component: IterateComponentComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'candy', component: CandyComponent},
    {path: 'promos', component: PromosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ViewDemoComponent,
    IterateComponentComponent,
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    CarrouselCardsComponent,
    HomeComponent,
    CarritoComponent,
    LoginComponent,
    BuscarGolosinaComponent,
    ContactoComponent,
    CandyComponent,
    PromosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
