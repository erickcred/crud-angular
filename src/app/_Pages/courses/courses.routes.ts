import { Routes } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { CourseFormComponent } from "./course-form/course-form.component";

export const courseRoutes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: CourseFormComponent }
]
