import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';




import { AppComponent } from './app.component';
import { HealthChartComponent } from './health-chart/health-chart.component';
import { ServersStatusComponent } from './servers-status/servers-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServersComponent } from './servers/servers.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddServerComponent } from './add-server/add-server.component';
import { ServerManageComponent } from './server-manage/server-manage.component';
import { HttpClientModule } from '@angular/common/http';
import { ServersService } from './servers.service';
import { ServerChecksComponent } from './server-checks/server-checks.component';
import { ServerDeleteComponent } from './server-delete/server-delete.component';
import { ChecksComponent } from './checks/checks.component';
import {QueriesModule} from './queries/queries.module';
import {QueriesComponent} from './queries/queries/queries.component';
import { FormsModule }   from '@angular/forms';
import {SocialModule} from './social/social.module';
import {SocialComponent} from './social/social/social.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("Your-Facebook-app-id")
        },
       
      ]
  );
  return config;
}





@NgModule({
  declarations: [
    AppComponent,
    HealthChartComponent,
    ServersStatusComponent,
    DashboardComponent,
    ServersComponent,
    AdminComponent,
    AddServerComponent,
    ServerManageComponent,
    ServerChecksComponent,
    ServerDeleteComponent,
    ChecksComponent,
    QueriesComponent,
    SocialComponent
   
    
  ],




  
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    QueriesModule,
    FormsModule,
    SocialLoginModule,
    SocialModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ ServersService,{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
