import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [MaterialModule],
  providers: [],
  bootstrap: []
})

export class AppModuleCourses { }
