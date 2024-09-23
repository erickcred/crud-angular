import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../Models/ICourse';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly api = 'api/courses';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.api)
      .pipe(
        first(),
        // delay(2000)
        // tap(x => console.log(x))
      );
  }

  getByIdCourse(id: string): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.api}/${id}`);
  }

  postCourse(course: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(this.api, course)
      .pipe(
        first(),
        // tap(x => console.log(x))
      );
  }

  updateCourse(id: string, course: ICourse): Observable<ICourse> {
    return this.http.put<ICourse>(`${this.api}/${id}`, course)
      .pipe(
        first(),
        // tap(x => console.log(x))
      );
  }

  deleteCourse(id: string): Observable<ICourse> {
    return this.http.delete<ICourse>('');
  }
}
