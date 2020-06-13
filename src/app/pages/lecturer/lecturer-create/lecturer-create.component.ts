import { Component, OnInit } from '@angular/core';
import { LecturerExpertisesService } from 'src/app/services/lecturerExpertises/lecturer-expertises.service';
import { LecturerService } from 'src/app/services/lecturer/lecturer.service';

@Component({
  selector: 'app-lecturer-create',
  templateUrl: './lecturer-create.component.html',
  styleUrls: ['./lecturer-create.component.css'],
})
export class LecturerCreateComponent implements OnInit {
  lecturerExpertises: any;
  lecturerData = {
    email: '',
    nidn: '',
    name: '',
    lecturer_expertise_id: '',
  };
  successM = false;
  failM = false;

  constructor(
    private lecturerExpertisesService: LecturerExpertisesService,
    private lecturerService: LecturerService
  ) {}

  ngOnInit(): void {
    this.getLecturerExpertise();
  }

  getLecturerExpertise() {
    this.lecturerExpertisesService.getAll().subscribe((res) => {
      this.lecturerExpertises = res;
    });
  }

  saveData() {
    const data = {
      email: this.lecturerData.email,
      name: this.lecturerData.name,
      nidn: this.lecturerData.nidn,
      lecturer_expertise_id: this.lecturerData.lecturer_expertise_id,
    };

    this.lecturerService.create(data).subscribe(
      (res) => {
        this.clearForm();
        this.failM = false;
        this.successM = true;
      },
      (error) => {
        this.failM = true;
        this.successM = false;
        console.log(error);
      }
    );
  }

  clearForm() {
    this.lecturerData = {
      email: '',
      name: '',
      nidn: '',
      lecturer_expertise_id: '',
    };
  }
}
