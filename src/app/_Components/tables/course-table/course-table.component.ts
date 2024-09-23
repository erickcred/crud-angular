import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppMaterialModule } from '../../../_Shared/app-material/app-material.module';
import { ICourse } from '../../../_Pages/courses/Models/ICourse';
import { CategoryPipe } from "../../../_Shared/pipes/course/category/category.pipe";

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
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  constructor() { }

  ngOnInit(): void {

  }

  onAdd() {
    this.add.emit();
  }

  onEdit(course: ICourse) {
    this.edit.emit(course)
  }
}
