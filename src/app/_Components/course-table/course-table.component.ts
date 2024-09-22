import { Component, Input, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../_Shared/app-material/app-material.module';
import { ICourse } from '../../_Pages/courses/Models/ICourse';
import { CategoryPipe } from "../../_Shared/pipes/course/category/category.pipe";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-table',
  standalone: true,
  imports: [
    AppMaterialModule,
    CategoryPipe
],
  templateUrl: './course-table.component.html',
  styleUrl: './course-table.component.scss'
})
export class CourseTableComponent implements OnInit {

  readonly coursesColumns: string[] = [ 'id', 'name', 'category', 'actions' ];
  @Input() courses: ICourse[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
