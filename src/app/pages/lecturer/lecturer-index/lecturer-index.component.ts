import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecturer-index',
  templateUrl: './lecturer-index.component.html',
  styleUrls: ['./lecturer-index.component.css']
})
export class LecturerIndexComponent implements OnInit {

  lecturers: any;

  constructor(private service: LecturerService) { }

  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    this.service.getAll()
      .subscribe(res => {
        this.lecturers = res;
        console.log(this.lecturers);
      }, error => {
        console.error();
      });
  }

}
