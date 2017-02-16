import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
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
import { MzInfoSecurityComponent } from './mz-info-security/mz-info-security.component';
import { MzSecurityCenterComponent } from './mz-security-center/mz-security-center.component';

import { SideNavComponent } from './mz-systems/side-nav/side-nav.component';
import { TestComponent } from './test/test.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { FaultsComponent } from './faults/faults.component';
import {FaultsDataProviderService} from "./services/faults-data-provider.service";


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './reducers';
import {RouterStoreModule} from "@ngrx/router-store";
import { SysTotalsComponent } from './sys-totals/sys-totals.component';


import { CovalentCoreModule } from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import {DashboardTemplateComponent} from "./dashboard/dashboard.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';

import 'hammerjs';



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
    FaultsComponent,
    SysTotalsComponent,
    DashboardTemplateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RtlModule,
    RouterModule.forRoot(AppRoutes),
    MaterialModule.forRoot(),
    NgxChartsModule,


    GaugeModule,
    DataTableModule,SharedModule,
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),

    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    CovalentCoreModule.forRoot(),
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentDynamicFormsModule.forRoot()


  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],

  providers: [D3Service,SystemDataProviderService,FaultsDataProviderService],
  bootstrap: [AppComponent]
})

export class AppModule {}
