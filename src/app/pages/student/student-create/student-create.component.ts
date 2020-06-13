import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent implements OnInit {
  studentData = {
    email: '',
    nim: '',
    name: '',
    entry_year: '',
  };

  successM = false;
  failM = false;

  constructor(private service: StudentService) {}

  ngOnInit(): void {}

  clearForm() {
    this.studentData = {
      email: '',
      nim: '',
      name: '',
      entry_year: '',
    };
  }

  saveData() {
    const data = {
      email: this.studentData.email,
      name: this.studentData.name,
      nim: this.studentData.nim,
      entry_year: this.studentData.entry_year,
    };
    this.service.create(data).subscribe(
      (res) => {
        this.failM = false;
        this.successM = true;
        this.clearForm();
      },
      (error) => {
        this.failM = true;
        this.successM = false;
      }
    );
  }
}
