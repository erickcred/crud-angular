import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourses } from '../Models/ICourses';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly api = 'api/courses';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<ICourses[]> {
    return this.http.get<ICourses[]>(this.api)
      .pipe(
        first(),
        // tap(x => console.log(x))
      );
  }

  getByIdCourse(id: string): Observable<ICourses> {
    return this.http.get<ICourses>('');
  }

  postCourse(course: ICourses): Observable<ICourses> {
    return this.http.post<ICourses>('', course);
  }

  updateCourse(id: string, course: ICourses): Observable<ICourses> {
    return this.http.put<ICourses>('', course);
  }

  deleteCourse(id: string): Observable<ICourses> {
    return this.http.delete<ICourses>('');
  }
}
