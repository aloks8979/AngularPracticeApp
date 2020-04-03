import { CourseService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
      <h2> {{ "Title :" + title + "  Name : " + getName()}} </h2>
      <ul>
        <li *ngFor = "let c of courses">
              {{c}}
        </li>
      </ul>

      <ul>
        <li *ngFor = "let c1 of students">
              {{c1}}
        </li>
      </ul>
      `,
  // styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor( service : CourseService) {
      this.students = service.getStudent();
   }

  ngOnInit(): void {
  }

  title = "List of courses";
  getName(){
    return "Alok Singh";
  }

  courses = ["course1","course2","course3"];
  students;

}
