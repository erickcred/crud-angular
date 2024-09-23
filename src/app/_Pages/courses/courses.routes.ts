import { Routes } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { CourseFormComponent } from "./course-form/course-form.component";
import { courseResolver } from "../../_Guards/course.resolver";

export const courseRoutes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: CourseFormComponent, resolve: { course: courseResolver }},
  { path: 'edit/:id', component: CourseFormComponent, resolve: { course: courseResolver } }
]
