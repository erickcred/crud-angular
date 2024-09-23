import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ICourse } from '../_Pages/courses/Models/ICourse';
import { CoursesService } from '../_Pages/courses/services/courses.service';

export const courseResolver: ResolveFn<ICourse> = (route, state): Observable<ICourse> => {
  const coursesService = inject(CoursesService);

  if (route.params && route.params['id']) {
    const course = coursesService.getByIdCourse(route.params['id'])
    // console.log(course)
    return course;
  }
  const course = { id: '', name: '', category: '' };
  // console.log(course)
  return of(course);
};
