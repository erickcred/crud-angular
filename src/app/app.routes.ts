import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',
    loadChildren: () => import('./_Pages/courses/courses.routes').then(m => m.courseRoutes)
  }
];
