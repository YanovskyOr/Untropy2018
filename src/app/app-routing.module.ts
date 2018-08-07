import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ServersComponent } from './servers/servers.component';
import { ChecksComponent } from './checks/checks.component';
import { AdminComponent } from './admin/admin.component';
import {QueriesComponent} from './queries/queries/queries.component';
import {SocialComponent} from './social/social/social.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'checks', component: ChecksComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'queries', component: QueriesComponent},
  { path: 'Social', component: SocialComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
