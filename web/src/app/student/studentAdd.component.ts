import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as internal from 'assert';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './studentAdd.component.html',
})
export class StudentAddComponent {
  public students: Student[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  onSubmit() {
    console.log(this.http)
    this.http.post<any>(this.baseUrl + 'students', this.studentForm.value).subscribe((result) => {
      console.warn("result", result)
    })
  }
  studentForm = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    }),
    email: new FormControl('', Validators.required),
    major: new FormControl('', Validators.required),
    gradeAverage: new FormControl('', Validators.required)
  });

}

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  major: string;
  grade: number;
}