import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { AppMaterialModule } from '../../../_Shared/app-material/app-material.module';
import { CoursesService } from '../services/courses.service';
import { ICourse } from '../Models/ICourse';
import { ToolbarComponent } from "../../../_Components/toolbar/toolbar.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    AppMaterialModule,
    ToolbarComponent
],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  courseForm = this.formBuilder.group({
    name: [ '', Validators.required ],
    category: [ '', Validators.required ]
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
      this.coursesService.postCourse(this.courseForm.value as ICourse)
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
