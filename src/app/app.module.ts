import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApprutasModule } from './apprutas.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { TableComponent } from './componentes/table/table.component';
import { IconComponent } from './componentes/icon/icon.component';
import { GoogleMapComponent } from './componentes/google-map/google-map.component';
import { BlankComponent } from './componentes/blank/blank.component';
import { ErrorComponent } from './componentes/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ProfileComponent,
    TableComponent,
    IconComponent,
    GoogleMapComponent,
    BlankComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    ApprutasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
