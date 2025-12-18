import { Component } from '@angular/core';
import {FormArray, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  REGEX = '^(?=.*[a-zA-Z])(?=.*[0-9]).+$'

  name : FormControl<String | null> =
    new FormControl ('', [Validators.required, Validators.minLength(6)]);
  password =
     new FormControl ('', [
       Validators.required,
       Validators.pattern(this.REGEX),
       Validators.minLength(8)
     ]);

  confirmPassword = new FormControl ('', [Validators.required]);

  technos : FormArray<FormControl<String | null>> =
    new FormArray<FormControl<String | null>>([new FormControl ('', Validators.required)]);

  mustMatch (): boolean {
    return this.password.value === this.confirmPassword.value
  }

}
