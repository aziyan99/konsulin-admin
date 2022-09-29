import { Component, OnInit } from '@angular/core';
/**
 * Service
 */
import { LecturerService } from 'src/app/services/lecturer/lecturer.service';

@Component({
  selector: 'app-lecturer-index',
  templateUrl: './lecturer-index.component.html',
  styleUrls: ['./lecturer-index.component.css'],
})
export class LecturerIndexComponent implements OnInit {
  lecturers: any;

  constructor(private service: LecturerService) {}

  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    this.service.getAll().subscribe(
      (res) => {
        this.lecturers = res;
      },
      (error) => {
        console.error();
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
        }
      );
    }
  }
}
