import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { LecturerService } from 'src/app/services/lecturer/lecturer.service';
import { LecturerExpertisesService } from 'src/app/services/lecturerExpertises/lecturer-expertises.service';

@Component({
  selector: 'app-lecturer-edit',
  templateUrl: './lecturer-edit.component.html',
  styleUrls: ['./lecturer-edit.component.css'],
})
export class LecturerEditComponent implements OnInit {
  routeParams: Params;
  lecturer: any;
  lecturerExpertises: any;
  lecturerData = {
    email: '',
    name: '',
    nidn: '',
    lecturer_expertise_id: '',
  };
  successM = false;
  failM = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private lecturerService: LecturerService,
    private expertiseService: LecturerExpertisesService
  ) {
    this.getRouteParam();
  }

  ngOnInit(): void {
    this.getById();
    this.getExpertise();
  }

  getRouteParam() {
    this.activatedRoute.params.subscribe((params) => {
      this.routeParams = params;
    });
  }

  getExpertise() {
    this.expertiseService.getAll().subscribe((res) => {
      this.lecturerExpertises = res;
    });
  }

  getById() {
    this.lecturerService.getById(this.routeParams.id).subscribe(
      (res) => {
        this.lecturer = res;
        this.lecturerData = {
          email: this.lecturer.email,
          name: this.lecturer.lecturer.name,
          nidn: this.lecturer.lecturer.nidn,
          lecturer_expertise_id: this.lecturer.lecturer.lecturer_expertise_id,
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateData() {
    const id = this.routeParams.id;
    const data = {
      email: this.lecturerData.email,
      name: this.lecturerData.name,
      nidn: this.lecturerData.nidn,
      lecturer_expertise_id: this.lecturerData.lecturer_expertise_id,
    };
    this.lecturerService.update(id, data).subscribe(
      (res) => {
        this.failM = false;
        this.successM = true;
      },
      (error) => {
        this.successM = false;
        this.failM = true;
        console.log(error);
      }
    );
  }
}
