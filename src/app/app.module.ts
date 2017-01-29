import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { SysRelationsComponent } from './system/sys-relations/sys-relations.component';
import {SystemDataProviderService} from "./system/system-data-provider.service";


@NgModule({
  declarations: [
    AppComponent,
    SysRelationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()

  ],
  providers: [D3Service,SystemDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
