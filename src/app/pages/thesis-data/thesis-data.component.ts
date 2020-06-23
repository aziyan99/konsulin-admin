import { Component, OnInit } from '@angular/core';
import { OtherService } from 'src/app/services/other/other.service';

@Component({
  selector: 'app-thesis-data',
  templateUrl: './thesis-data.component.html',
  styleUrls: ['./thesis-data.component.css'],
})
export class ThesisDataComponent implements OnInit {
  renderFailM = false;
  thesisData: any;
  constructor(private service: OtherService) {}

  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    this.service.getThesisData().subscribe(
      (res) => {
        this.thesisData = res;
      },
      (error) => {
        this.renderFailM = true;
      }
    );
  }
}
