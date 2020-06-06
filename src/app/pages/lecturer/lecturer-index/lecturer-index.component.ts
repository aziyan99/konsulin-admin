import { Component, OnInit } from '@angular/core';
/**
 * Service
 */
import { LecturerService } from 'src/app/services/lecturer/lecturer.service';
import { LecturerExpertisesService } from 'src/app/services/lecturerExpertises/lecturer-expertises.service';

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
        console.log(this.lecturers);
      },
      (error) => {
        console.error();
      }
    );
  }
}
