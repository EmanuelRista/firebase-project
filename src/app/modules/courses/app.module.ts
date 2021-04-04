import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { CoursesComponent } from './components/courses/courses.component';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [MaterialModule, BrowserModule],
  providers: [],
  bootstrap: []
})

export class AppModuleCourses { }
