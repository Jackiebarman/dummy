import { BrowserModule, } from '@angular/platform-browser';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgModule } from '@angular/core';
// import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { NgForm }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, MultiSelectAllModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }