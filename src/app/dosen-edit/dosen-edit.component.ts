import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LecturerExpertisesService } from 'src/app/services/lecturer-expertises/lecturer-expertises.service';
import { LecturerService } from 'src/app/services/lecturer/lecturer.service';

@Component({
  selector: 'app-dosen-edit',
  templateUrl: './dosen-edit.component.html',
  styleUrls: ['./dosen-edit.component.css']
})
export class DosenEditComponent implements OnInit {

  id: any;
  expertises: any;
  lecturer: any;
  editLecturer = {
    email: '',
    nidn: '',
    name: '',
    expertise_id: ''
  };

  constructor(private route: ActivatedRoute, private service: LecturerService, private lecExprService: LecturerExpertisesService) { }

  ngOnInit(): void {
    this.getParams();
    this.retriveExpertises();
    this.setForm();
  }

  retriveExpertises() {
    this.lecExprService.getAll()
      .subscribe(data => {
        this.expertises = data;
      }, error => {
        console.log(error);
      });
  }

  setForm() {
    this.service.getById(this.id.params.id)
      .subscribe(data => {
        this.lecturer = data;
        this.editLecturer = {
          email: this.lecturer.email,
          nidn: this.lecturer.lecturer.nidn,
          name: this.lecturer.lecturer.name,
          expertise_id: this.lecturer.lecturer.lecturer_expertise_id,
        }
      }, error => {
        console.log(error);
      });
  }

  getParams() {
    this.route.paramMap.subscribe(params => {
      this.id = params
    });
  }

  updateData() {
    const data = {
      email: this.editLecturer.email,
      nidn: this.editLecturer.nidn,
      name: this.editLecturer.name,
      lecturer_expertise_id: this.editLecturer.expertise_id
    }

    this.service.update(this.id.params.id, data)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

}
