import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'mission/:flight_number', loadComponent: () => import('./missiondetails/missiondetails.component').then(m => m.MissiondetailsComponent) } // ✅ Lazy-load standalone component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
