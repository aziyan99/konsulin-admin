import { Component, OnInit } from '@angular/core';
import { KonsulinService } from 'src/app/services/konsulin.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-dosen',
  templateUrl: './dosen.component.html',
  styleUrls: ['./dosen.component.css']
})
export class DosenComponent implements OnInit {

  dosen: any;
  currentDosen = null;
  currentIndex = -1;
  name = '';

  constructor(private konsulinService: KonsulinService) { }

  ngOnInit(): void {
    this.retriveDosen();
  }

  retriveDosen() {
    this.konsulinService.getAll()
      .subscribe(data => {
        this.dosen = data;
        console.log(data);
      },
        error => {
          console.log(error);
        });
  }

}
