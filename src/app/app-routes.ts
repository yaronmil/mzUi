import {MzSysMapComponent} from "./mz-systems/mz-sys-map.component";
import {Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {MzInfoSecurityComponent} from "./main/mz-info-security/mz-info-security.component";
import {MzSecurityCenterComponent} from "./main/mz-security-center/mz-security-center.component";
import {TestComponent} from "./test/test.component";
export const AppRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'מפה', component: MzSysMapComponent },
  { path: 'ראשי', component: MainComponent },
  { path: 'אבמ', component: MzInfoSecurityComponent },
  { path: 'מוקד', component: MzSecurityCenterComponent},
  { path: '',   redirectTo: '/מפה', pathMatch: 'full' },

];


