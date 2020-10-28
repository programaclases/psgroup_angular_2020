import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PromesasComponent } from './pages/promesas/promesas.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { OtromenuComponent } from './components/otromenu/otromenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromesasComponent,
    ObservablesComponent,
    MenuComponent,
    OtromenuComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
