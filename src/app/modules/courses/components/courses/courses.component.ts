import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/modules/common/services/categories.service';
import { Subscriber, Subscription, from } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  categories: any[];
  courses: any[];
  sub: Subscription;


  constructor(private categoriesService: CategoriesService, private courseService: CourseService) { }

  ngOnInit() {
    this.sub = this.categoriesService.getAllCategories()
      .pipe(
        mergeMap(categories => this.courseService.getAllCourses().pipe(
          map(courses => [categories, courses])
        ))).subscribe(([categories, courses]) => {
          this.categories = categories;
          this.courses = courses;
          console.log(courses);
          console.log(categories);
        });

  }

  getCoursesByCategorie(key) {
    return this.courses.filter(course => course.categorie == key);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
