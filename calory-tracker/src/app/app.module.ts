import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { TodayComponent } from './today/today.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodlistComponent,
    FormComponent,
    MainComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
