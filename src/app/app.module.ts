import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IrisComponent } from './iris/iris.component';
import { IrisDetailComponent } from './iris-detail/iris-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';



import { ChartsModule } from '../charts/charts.module';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'iris', component: IrisComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IrisComponent,
    IrisDetailComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
