import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { MzSysMapComponent } from './mz-systems/mz-sys-map.component';
import {SystemDataProviderService} from "./services/system-data-provider.service";
import { RouterModule } from '@angular/router';
import { AppRoutes} from './app-routes';
import { MapSearchComponent } from './mz-systems/map-search.component';

import {RtlModule} from '@angular/material/core/rtl/dir';
import { MonthlyGougeComponent } from './mz-systems/side-nav/monthly-gouge.component';
import { GaugeModule } from 'ng2-kw-gauge';
import { SysStartUpLevelSelectorComponent ,DialogOverviewExampleDialog} from './mz-systems/sys-start-up-level-selector/sys-start-up-level-selector.component';
import { MainComponent } from './main/main.component';
import { MzInfoSecurityComponent } from './main/mz-info-security/mz-info-security.component';
import { MzSecurityCenterComponent } from './main/mz-security-center/mz-security-center.component';

import { SideNavComponent } from './mz-systems/side-nav/side-nav.component';
import { TestComponent } from './test/test.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { FaultsComponent } from './faults/faults.component';
import {FaultsDataProviderService} from "./services/faults-data-provider.service";


@NgModule({
  declarations: [
    AppComponent,
    MzSysMapComponent,
    MapSearchComponent,
    MonthlyGougeComponent,
    SysStartUpLevelSelectorComponent,
    DialogOverviewExampleDialog,
    MainComponent,
    MzInfoSecurityComponent,
    MzSecurityCenterComponent,
    SideNavComponent,
    SideNavComponent,
    TestComponent,
    FaultsComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RtlModule,
    MaterialModule.forRoot(),

    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    GaugeModule,
    DataTableModule,SharedModule

  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],

  providers: [D3Service,SystemDataProviderService,FaultsDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
