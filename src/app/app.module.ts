import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { MzSysMapComponent } from './mz-systems/mz-sys-map.component';
import {SystemDataProviderService} from "./mz-systems/system-data-provider.service";
import { RouterModule } from '@angular/router';
import { AppRoutes} from './app-routes';



@NgModule({
  declarations: [
    AppComponent,
    MzSysMapComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(AppRoutes)

  ],
  providers: [D3Service,SystemDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
