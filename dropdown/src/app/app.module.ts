import { BrowserModule } from '@angular/platform-browser';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgModule } from '@angular/core';
// import { ReactiveFormModule } from '@angular/forms';
// import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { NgForm }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/core';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
      MultiSelectAllModule
        // HttpClientModule,
        //  ReactiveFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }