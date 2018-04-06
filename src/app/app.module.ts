import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalculateReportComponent } from './calculate-report/calculate-report.component';
import { DeleteReportComponent } from './delete-report/delete-report.component';
import { UpdateReportComponent } from './update-report/update-report.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculateReportComponent,
    DeleteReportComponent,
    UpdateReportComponent,
    ViewReportsComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
