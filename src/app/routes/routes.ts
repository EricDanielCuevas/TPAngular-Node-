import { Routes } from '@angular/router';
import { VigilanteGuard } from 'src/app/guard/vigilar.guard';
import { HomeComponent } from 'src/app/componentes/home/home.component';

import { LoginComponent } from 'src/app/componentes/login/login.component';
import { CrearcuentaComponent } from 'src/app/componentes/crearcuenta/Crearcuenta.component';
import { CarritoComponent } from 'src/app/componentes/carrito/carrito.component';

export const routes: Routes = [
  { path: '/', component: HomeComponent, canActivate: [VigilanteGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'crearcuenta', component: CrearcuentaComponent },
  { path: 'carrito', component: CarritoComponent, canActivate: [VigilanteGuard]},
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];