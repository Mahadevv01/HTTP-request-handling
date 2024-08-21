import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; // Make sure this file exists in src/app
import { DataDisplayComponent } from './data-display/data-display.component'; // Ensure this path is correct
import { OrderByPipe } from './order-by.pipe'; // Ensure this path is correct

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
