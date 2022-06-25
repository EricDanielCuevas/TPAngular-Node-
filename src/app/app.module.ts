import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViewDemoComponent } from './view-demo/view-demo.component';
import { IterateComponentComponent } from './iterate-component/iterate-component.component';
import { NavbarComponent } from './componentes/componentes-especificos/navbar/navbar.component';
import { FooterComponent } from './componentes/componentes-especificos/footer/footer.component';
import { CarrouselComponent } from './componentes/componentes-especificos/carrousel/carrousel.component';
import { CarrouselCardsComponent } from './componentes/componentes-especificos/carrousel-cards/carrousel-cards.component';
import { HomeComponent } from './componentes/home/home.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { LoginComponent } from './componentes/login/login.component';
import { BuscarGolosinaComponent } from './componentes/buscar-golosina/buscar-golosina.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CarrouselCards2Component } from './componentes/componentes-especificos/carrousel-cards2/carrousel-cards2.component';
import { CarrouselCards3Component } from './componentes/componentes-especificos/carrousel-cards3/carrousel-cards3.component';
import { PromosComponent } from './componentes/promos/promos.component';
import { CandyComponent } from './componentes/candy/candy.component';
import { CrearcuentaComponent } from './componentes/crearcuenta/crearcuenta.component';
import { CarrouselCardsPromosComponent } from './componentes/componentes-especificos/carrousel-cards-promos/carrousel-cards-promos.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeAdminComponent } from './componentes/home-admin/home-admin.component';
import { AgregarProductoComponent } from './componentes/home-admin/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './componentes/home-admin/editar-producto/editar-producto.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: 'editar-producto/:id', component: EditarProductoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'buscar-golosina', component: BuscarGolosinaComponent },
  { path: 'view', component: ViewDemoComponent },
  { path: 'iterate', component: IterateComponentComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'candy', component: CandyComponent },
  { path: 'promos', component: PromosComponent },
  { path: 'crearcuenta', component: CrearcuentaComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
  //{ path: 'producto/:id', component: CarritoComponent }
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
    DetalleProductoComponent,
    HomeAdminComponent,
    AgregarProductoComponent,
    EditarProductoComponent
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
