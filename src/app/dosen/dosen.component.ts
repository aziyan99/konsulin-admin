import { Component, OnInit } from '@angular/core';
import { LecturerService } from 'src/app/services/lecturer/lecturer.service';

@Component({
  selector: 'app-dosen',
  templateUrl: './dosen.component.html',
  styleUrls: ['./dosen.component.css']
})
export class DosenComponent implements OnInit {

  lecturers: any;

  constructor(private service: LecturerService) { }

  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    this.service.getAll()
      .subscribe(data => {
        this.lecturers = data;
        console.log(data);
      },
        error => {
          console.log(error);
        });
  }

}
