import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private db: AngularFireDatabase) { }

  getAllCourses() {
    return this.db.list('/courses')
      .snapshotChanges()
      .pipe(
        map(change => change.map(c => ({ key: c.payload.key, ...c.payload.exportVal() }))
        ))
  }

}
