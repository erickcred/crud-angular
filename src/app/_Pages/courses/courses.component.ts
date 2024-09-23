import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorAlertComponent } from '../../_Components/error-alert/error-alert.component';
import { AppMaterialModule } from '../../_Shared/app-material/app-material.module';
import { ICourse } from './Models/ICourse';
import { CoursesService } from './services/courses.service';
import { CategoryPipe } from "../../_Shared/pipes/course/category/category.pipe";
import { ActivatedRoute, Router } from '@angular/router';
import { ToolbarComponent } from "../../_Components/toolbar/toolbar.component";
import { CourseTableComponent } from "../../_Components/tables/course-table/course-table.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    AppMaterialModule,
    CategoryPipe,
    ToolbarComponent,
    CourseTableComponent
],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<ICourse[]>;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courses$ = this.coursesService.getAllCourses().pipe(
      catchError(
        error => {
          this.showErrorMessage(error);
          return of([]);
        }
      )
    );
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit(course: ICourse) {
    this.router.navigate(['edit/', course.id], { relativeTo: this.route })
  }

  showErrorMessage(error: any) {
    this.dialog.open(ErrorAlertComponent, {
      data: {
        name: error.name,
        status: error.status,
        statusText: error.statusText,
        message: `Não foi possível carregar cursos`,
      }
    });
  }

}
