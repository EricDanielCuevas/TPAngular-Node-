import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IterateComponentComponent } from './iterate-component/iterate-component.component';
import { ViewDemoComponent } from './view-demo/view-demo.component';

const routes: Routes = [
  {path: 'view', component: ViewDemoComponent},
  {path: 'iterate', component: IterateComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
