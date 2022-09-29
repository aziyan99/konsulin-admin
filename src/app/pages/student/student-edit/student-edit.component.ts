import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  routeParams: Params;
  student: any;
  studentData = {
    email: '',
    name: '',
    nim: '',
    entry_year: '',
  };
  successM = false;
  failM = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: StudentService
  ) {
    this.getRouteParam();
  }

  ngOnInit(): void {
    this.getById();
  }

  getRouteParam() {
    this.activatedRoute.params.subscribe((params) => {
      this.routeParams = params;
    });
  }

  getById() {
    this.service.getById(this.routeParams.id).subscribe(
      (res) => {
        this.student = res;
        this.studentData = {
          email: this.student.email,
          name: this.student.student.name,
          nim: this.student.student.nim,
          entry_year: this.student.student.entry_year,
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateData() {
    const id = this.routeParams.id;
    const data = {
      email: this.studentData.email,
      name: this.studentData.name,
      nim: this.studentData.nim,
      entry_year: this.studentData.entry_year,
    };

    this.service.update(id, data).subscribe(
      (res) => {
        this.failM = false;
        this.successM = true;
      },
      (error) => {
        this.successM = false;
        this.failM = true;
      }
    );
  }
}
