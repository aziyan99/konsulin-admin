import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-mahasiswa-edit',
  templateUrl: './mahasiswa-edit.component.html',
  styleUrls: ['./mahasiswa-edit.component.css']
})
export class MahasiswaEditComponent implements OnInit {

  id: any;
  students: any;
  setStudent = {
    email: '',
    nim: '',
    name: '',
    entry_year: ''
  };

  constructor(private route: ActivatedRoute, private service: StudentService) { }

  ngOnInit(): void {
    this.getParams();
    console.log(this.id.params.id);
    this.getData();
  }

  getParams() {
    this.route.paramMap.subscribe(params => {
      this.id = params;
    });
  }

  getData() {
    this.service.getById(this.id.params.id)
      .subscribe(data => {
        this.students = data;
        this.setStudent = {
          email: this.students.email,
          nim: this.students.student.nim,
          name: this.students.student.name,
          entry_year: this.students.student.entry_year,
        };
        console.log(this.setStudent);
      }, error => {
        console.log(error);
      });
  }

  updateData() {
    const data = {
      email: this.setStudent.email,
      nim: this.setStudent.nim,
      name: this.setStudent.name,
      entry_year: this.setStudent.entry_year,
    };
    this.service.update(this.id.params.id, data)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

}
