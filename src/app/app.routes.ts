import { Routes } from '@angular/router';
import { SpeedOmeterComponent } from './components/speed-ometer/speed-ometer.component';
import { FeederComponent } from './components/feeder/feeder.component';

export const routes: Routes = [
    {path: "speedometer", component: SpeedOmeterComponent},
    {path: "feeder", component:FeederComponent},
    {path: "", pathMatch: 'full', redirectTo: "/speedometer"}
];
