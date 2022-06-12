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
import { CarrouselCards2Component } from './componentes/carrousel-cards2/carrousel-cards2.component';
import { CarrouselCards3Component } from './componentes/carrousel-cards3/carrousel-cards3.component';
import { PromosComponent } from './promos/promos.component';
import { CandyComponent } from './candy/candy.component';
import { CrearcuentaComponent } from './crearcuenta/crearcuenta.component';
import { CarrouselCardsPromosComponent } from './componentes/carrousel-cards-promos/carrousel-cards-promos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'buscar-golosina', component: BuscarGolosinaComponent },
  { path: 'view', component: ViewDemoComponent },
  { path: 'iterate', component: IterateComponentComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'candy', component: CandyComponent },
  { path: 'promos', component: PromosComponent },
  {path: 'crearcuenta', component: CrearcuentaComponent},
  { path: 'detalle/:id', component: DetalleProductoComponent }
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
    CarrouselCards2Component,
    CarrouselCards3Component,
    PromosComponent,
    CandyComponent,
    CrearcuentaComponent,
    CarrouselCardsPromosComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
