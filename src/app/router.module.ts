
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { provideRoutes, RouterModule } from '@angular/router';
import { RecordPageComponent } from './record-report/record-page.component';
import { UpdateReportComponent } from './update-report/update-report.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import { CalculateReportComponent } from './calculate-report/calculate-report.component';
import { LandingPageComponent } from './landing_Page/landingPage.component';
import { HomePageComponent} from './home-page/home-page.component';


const APP_ROUTES = [
  {path: '', redirectTo: '/landing_Page', pathMatch: 'full'},
  {path: 'landing_Page', component: LandingPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'record-report/home-page', component: RecordPageComponent},
  {path: 'update-report', component: UpdateReportComponent},
  {path: 'view-reports', component: ViewReportsComponent },
  {path: 'calculate-report', component: CalculateReportComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
