import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-mahasiswa-add',
  templateUrl: './mahasiswa-add.component.html',
  styleUrls: ['./mahasiswa-add.component.css']
})
export class MahasiswaAddComponent implements OnInit {
  newStudent = {
    email: '',
    nim: '',
    name: '',
    entry_year: ''
  };

  constructor(private service: StudentService) { }

  ngOnInit(): void {
  }

  saveStudent() {
    const data = {
      email: this.newStudent.email,
      nim: this.newStudent.nim,
      name: this.newStudent.name,
      entry_year: this.newStudent.entry_year
    };

    this.service.create(data)
      .subscribe(response => {
        console.log(response);
        this.clearForm();
      }, error => {
        console.log(error);
      });
  }

  clearForm() {
    this.newStudent = {
      email: '',
      nim: '',
      name: '',
      entry_year: ''
    };
  }


}
