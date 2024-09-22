import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { AppMaterialModule } from '../../../_Shared/app-material/app-material.module';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  courseForm: FormGroup = this.formBuilder.group({
    name: [ null, Validators.required ],
    category: [ null, Validators.required ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.courseForm.valid) {
      this.coursesService.postCourse(this.courseForm.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          if (response) {
            this.onCancel();
            this.showErrorMessage(`Curso ${response.name} salvo com sucesso`, '', 5000);
          } else
            this.showErrorMessage(`Houve uma intermitencia no processo, por favor tente novamente`, 'Ok');
        },
        error: (error) => {
          this.showErrorMessage(`${error.name} ${error.status}, ${error.statusText}`, 'Ok');
        }
      });
    }
  }

  onCancel() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  showErrorMessage(message: string, action?: string, duration?: number) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'start',
      verticalPosition: 'top',
      duration: duration = null? 123000 : duration
    });
  }
}
