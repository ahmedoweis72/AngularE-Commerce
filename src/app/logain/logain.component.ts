import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logain',
  imports: [FormsModule],
  templateUrl: './logain.component.html',
  styleUrl: './logain.component.css'
})
export class LogainComponent {
  formValues = {
    inputEmail3: '',
    inputPassword3: ''
  }
  handleFormSubmit(form: any){
    console.log(form)
    console.log(form.value)
 
   }

}
