import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as internal from 'assert';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './studentAdd.component.html',
})
export class StudentAddComponent {
  public students: Student[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Student[]>(baseUrl + 'students').subscribe(result => {
      this.students = result;
    }, error => console.error(error));
  }
  studForm = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    }),
    email: new FormControl(),
    major: new FormControl(),
    grade: new FormControl()
  });
  onSubmit() {
    console.log(this.studForm.value)
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