import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorAlertComponent } from '../../_Components/error-alert/error-alert.component';
import { AppMaterialModule } from '../../_Shared/app-material/app-material.module';
import { ICourses } from './Models/ICourses';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    AppMaterialModule,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  isLoadingResults = false;
  isRateLimitReached = false;

  coursesColumns: string[] = [ 'id', 'name', 'category' ];
  resultsLength: number = 0;
  courses$: Observable<ICourses[]>;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
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
