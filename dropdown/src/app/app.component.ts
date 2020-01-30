import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items:any[]=[];
     // define the JSON of data
     public countries: { [key: string]: Object; }[] = [
        { Name: 'Paracitamol' },
            { Name: 'Arnica'},
            { Name: 'khukinal' },
            { Name: 'Cameroon' },
            { Name: 'Semoon' },
            { Name: 'Volini' },
            { Name: 'Vick'},
            { Name: 'Dolo 650' },          
        ];
        constructor() { }
        ngOnInit() {
        }
        onSubmit(form: NgForm): void {
          this.items=form.value.name;
          console.log(form.value.name);
        }
      
  
        // maps the local data column to fields property
        public localFields: Object = { text: 'Name', value: 'Name' };
        // set the placeholder to MultiSelect Dropdown input element
        public localWaterMark: string = 'Select medicines';
}