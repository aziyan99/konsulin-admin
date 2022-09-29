import { Component, OnInit } from '@angular/core';
import { OtherService } from 'src/app/services/other/other.service';

@Component({
  selector: 'app-consult-group',
  templateUrl: './consult-group.component.html',
  styleUrls: ['./consult-group.component.css'],
})
export class ConsultGroupComponent implements OnInit {
  consultData: any;
  renderFailM = false;

  constructor(private service: OtherService) {}

  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    this.service.getConsultGroup().subscribe(
      (res) => {
        this.consultData = res;
      },
      (error) => {
        this.renderFailM = true;
      }
    );
  }
}
