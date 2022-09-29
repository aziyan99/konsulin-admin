import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.css'],
})
export class StudentIndexComponent implements OnInit {
  students: any;

  constructor(private service: StudentService) {}

  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    this.service.getAll().subscribe(
      (res) => {
        this.students = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteData(id) {
    var check = confirm('Hapus data ini ?');
    if (check === true) {
      this.service.destroy(id).subscribe(
        (res) => {
          alert('Data berhasil dihapus');
          this.ngOnInit();
        },
        (error) => {
          console.log(error);
          alert('Data gagal dihapus.');
        }
      );
    }
  }
}
