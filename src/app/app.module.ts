import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { IrisComponent } from './iris/iris.component';
import { IrisDetailComponent } from './iris-detail/iris-detail.component';

import { RouterModule, Routes }   from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { GraphComponent } from './graph/graph.component';
import { ChartComponent } from './chart/chart.component';
import { HistogramComponent } from './histogram/histogram.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { ScatterComponent } from './scatter/scatter.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'iris', component: IrisComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    IrisComponent,
    IrisDetailComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    CardComponent,
    GraphComponent,
    ChartComponent,
    HistogramComponent,
    PieComponent,
    BarComponent,
    ScatterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
