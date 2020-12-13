import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './componentes/blank/blank.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ErrorComponent } from './componentes/error/error.component';
import { GoogleMapComponent } from './componentes/google-map/google-map.component';
import { IconComponent } from './componentes/icon/icon.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { TableComponent } from './componentes/table/table.component';



const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'google-map', component: GoogleMapComponent},
  {path:'table', component: TableComponent},
  {path:'blank', component: BlankComponent},
  {path:'icon', component: IconComponent}
  
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApprutasModule { }
