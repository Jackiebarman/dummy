import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormArray, FormGroup, Validators }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
//  import { forbiddenNameValidator } from './shared/user-name.validator';
 import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items:any[]=[];
     // define the JSON of data
        constructor() { }
        ngOnInit() {
        }
        onSubmit(form: NgForm,medicine,quantity): void {
          this.items=form.value.name;
          console.log(medicine.value);
          console.log(quantity.value);
        }
      
  
        // maps the local data column to fields property
        public localFields: Object = { text: 'Name', value: 'Name' };
        // set the placeholder to MultiSelect Dropdown input element
        public localWaterMark: string = 'Select medicines';
}