import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalculateReportComponent } from './calculate-report/calculate-report.component';
import { UpdateReportComponent } from './update-report/update-report.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import { RecordPageComponent } from './record-report/record-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './router.module';
import { LandingPageComponent } from './landing_Page/landingPage.component';
import { SighUpComponent } from './landing_Page/signUp.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SideHeaderComponent} from './header/header-side.component';



@NgModule({
  declarations: [
    AppComponent,
    CalculateReportComponent,
    UpdateReportComponent,
    ViewReportsComponent,
    RecordPageComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    SighUpComponent,
    HomePageComponent,
    SideHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
