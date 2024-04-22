import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apply-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.scss'
})
export class ApplyFormComponent {
  isFormVisible:boolean = true
  applyForm:FormGroup

  housingService:HousingService = inject(HousingService)

  constructor() {
    this.applyForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })

  }

  sendApplication() {
    if (this.applyForm.valid) {
      this.housingService.sendApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? ''
      )
      this.applyForm.reset()
      this.isFormVisible = false
    }else {
      console.warn('Form is invalid. Please fix errors before submitting.');
    }

 }


}
