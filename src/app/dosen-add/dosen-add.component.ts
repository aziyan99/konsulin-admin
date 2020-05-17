import { Component, OnInit } from '@angular/core';
import { LecturerExpertisesService } from 'src/app/services/lecturer-expertises/lecturer-expertises.service';
import { LecturerService } from 'src/app/services/lecturer/lecturer.service';

@Component({
  selector: 'app-dosen-add',
  templateUrl: './dosen-add.component.html',
  styleUrls: ['./dosen-add.component.css']
})
export class DosenAddComponent implements OnInit {

  constructor(private lecExpService: LecturerExpertisesService, private service: LecturerService) { }

  expertises: any;
  newLecturer = {
    email: '',
    nidn: '',
    name: '',
    expertise_id: ''
  };

  ngOnInit(): void {
    this.lecExpService.getAll()
      .subscribe(data => {
        this.expertises = data;

      }, error => {
        console.log(error);
      });
  }

  saveLecturer() {
    const data = {
      email: this.newLecturer.email,
      nidn: this.newLecturer.nidn,
      name: this.newLecturer.name,
      lecturer_expertise_id: this.newLecturer.expertise_id
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
    this.newLecturer = {
      email: '',
      nidn: '',
      name: '',
      expertise_id: ''
    };
  }

}
