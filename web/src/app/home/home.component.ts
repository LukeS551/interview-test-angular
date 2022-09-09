import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as internal from 'assert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public students: Student[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Student[]>(baseUrl + 'students').subscribe(result => {
      this.students = result;
    }, error => console.error(error));
  }
  getClass(grade) {
    if (grade >= 50 && grade < 80) {
      return 'text-warning'
    } else if (grade < 50) {
      return 'text-danger'
    } else {
      return 'text-success'
    }
  }
}

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  major: string;
  grade: number;
}