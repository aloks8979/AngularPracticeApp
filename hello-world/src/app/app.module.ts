import { AuthorsService } from './authors.service';
import { CourseService } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [
    CourseService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
