import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name : 'Java 8', category: 'Data Struct', }
  ];
  displayedColumns = ['name', 'category',];

  constructor() {
    // this.cocurses = [];
  }

  ngOnInit(): void {
  }

}
