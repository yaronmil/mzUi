import {MzSysMapComponent} from "./components/mz-systems/mz-sys-map.component";
import {Routes} from "@angular/router";

import {MzInfoSecurityComponent} from "./components/faults-info-security/mz-info-security.component";
import {MzSecurityCenterComponent} from "./components/faults-security-center/mz-security-center.component";
import {TestComponent} from "./components/test/test.component";
import {DashboardTemplateComponent} from "./components/dashboard/dashboard.component";
export const AppRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'מפה', component: MzSysMapComponent },
 /* { path: 'ראשי', component: MainComponent },*/
  { path: 'אבמ', component: MzInfoSecurityComponent },
  { path: 'מוקד', component: MzSecurityCenterComponent},
  { path: 'dashboard', component: DashboardTemplateComponent},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },

];


