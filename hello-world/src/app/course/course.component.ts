import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  template: `
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
  `
  //styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  isActive = true;
  constructor() { }

  ngOnInit(): void {
  }
}