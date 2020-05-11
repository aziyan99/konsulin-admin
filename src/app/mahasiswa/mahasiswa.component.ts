import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {

  students: any;

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    this.service.getAll()
      .subscribe(data => {
        this.students = data;
        console.log(data)
      }, error => {
        console.log(error);
      });
  }

  deleteData(id) {
    this.service.destroy(id)
      .subscribe(response => {
        console.log(response);
        this.retriveData();
      }, error => {
        console.log(error);
      });
  }

}
