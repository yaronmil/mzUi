import {MzSysMapComponent} from "./mz-systems/mz-sys-map.component";
import {Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {MzInfoSecurityComponent} from "./mz-info-security/mz-info-security.component";
import {MzSecurityCenterComponent} from "./mz-security-center/mz-security-center.component";
import {TestComponent} from "./test/test.component";
import {DashboardTemplateComponent} from "./dashboard/dashboard.component";
export const AppRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'מפה', component: MzSysMapComponent },
 /* { path: 'ראשי', component: MainComponent },*/
  { path: 'אבמ', component: MzInfoSecurityComponent },
  { path: 'מוקד', component: MzSecurityCenterComponent},
  { path: 'dashboard', component: DashboardTemplateComponent},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },

];


