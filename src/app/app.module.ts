import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './components/app/app.component';
import { MzSysMapComponent } from './components/mz-systems/mz-sys-map.component';
import { SystemDataProviderService } from "./services/system-data-provider.service";
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routes';
import { MapSearchComponent } from './components/mz-systems/map-search.component';

import { RtlModule } from '@angular/material/core/rtl/dir';
/*import { MonthlyGougeComponent } from './mz-systems/side-nav/monthly-gouge.component';*/
import { GaugeModule } from 'ng2-kw-gauge';
import { SysStartUpLevelSelectorComponent } from './components/mz-systems/sys-start-up-level-selector/sys-start-up-level-selector.component';
/*import { MainComponent } from './components/main/main.component';*/
import { MzInfoSecurityComponent } from './components/faults-info-security/mz-info-security.component';
import { MzSecurityCenterComponent } from './components/faults-security-center/mz-security-center.component';

import { SideNavComponent } from './components/mz-systems/side-nav/side-nav.component';
import { TestComponent } from './components/test/test.component';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { FaultsComponent } from './components/faults/faults.component';
import { FaultsDataProviderService } from "./services/faults-data-provider.service";


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './reducers';
import { RouterStoreModule } from "@ngrx/router-store";
import { SysTotalsComponent } from './components/mz-systems/sys-totals/sys-totals.component';


import { CovalentCoreModule } from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { DashboardTemplateComponent } from "./components/dashboard/dashboard.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';

import 'hammerjs';
import { DialogOverviewComponent } from './components/dialog-overview/dialog-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    MzSysMapComponent,
    MapSearchComponent,
    /*MonthlyGougeComponent,*/
    SysStartUpLevelSelectorComponent,
    /*MainComponent,*/
    MzInfoSecurityComponent,
    MzSecurityCenterComponent,
    SideNavComponent,
    SideNavComponent,
    TestComponent,
    FaultsComponent,
    SysTotalsComponent,
    DashboardTemplateComponent,
    DialogOverviewComponent
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
    DataTableModule, SharedModule,
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
    DialogOverviewComponent
  ],

  providers: [D3Service, SystemDataProviderService, FaultsDataProviderService],
  bootstrap: [AppComponent]
})

export class AppModule { }
