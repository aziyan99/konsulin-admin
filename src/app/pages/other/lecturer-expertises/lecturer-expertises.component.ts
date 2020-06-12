import { Component, OnInit } from '@angular/core';
import { LecturerExpertisesService } from 'src/app/services/lecturerExpertises/lecturer-expertises.service';

@Component({
  selector: 'app-lecturer-expertises',
  templateUrl: './lecturer-expertises.component.html',
  styleUrls: ['./lecturer-expertises.component.css'],
})
export class LecturerExpertisesComponent implements OnInit {
  lecturerExpertises: any;
  lecturerEditExpertises: any;
  expertiseData = {
    expertise_name: '',
  };
  expertisesEditData = {
    id: '',
    expertise_name: '',
  };
  successM = false;
  failM = false;
  renderFailM = false;
  createForm = true;
  editForm = false;

  constructor(private expertiseService: LecturerExpertisesService) {}

  ngOnInit(): void {
    this.retriveData();
  }

  saveData() {
    const data = {
      expertise_name: this.expertiseData.expertise_name,
    };
    this.expertiseService.create(data).subscribe(
      (res) => {
        this.failM = false;
        this.successM = true;
        this.clearForm();
        this.retriveData();
      },
      (error) => {
        this.successM = false;
        this.failM = true;
      }
    );
  }

  clearForm() {
    this.expertiseData.expertise_name = '';
  }

  retriveData() {
    this.expertiseService.getAll().subscribe(
      (res) => {
        this.renderFailM = false;
        this.lecturerExpertises = res;
      },
      (error) => {
        this.renderFailM = true;
      }
    );
  }

  editData(id) {
    this.successM = false;
    this.failM = false;
    this.createForm = false;
    this.editForm = true;
    this.expertiseService.getById(id).subscribe((res) => {
      this.lecturerEditExpertises = res;
      this.expertisesEditData = {
        id: this.lecturerEditExpertises.id,
        expertise_name: this.lecturerEditExpertises.expertise_name,
      };
    });
  }

  cancelEdit() {
    this.editForm = false;
    this.createForm = true;
    this.successM = false;
    this.failM = false;
  }

  updateData(id) {
    const data = {
      expertise_name: this.expertisesEditData.expertise_name,
    };
    this.expertiseService.update(id, data).subscribe(
      (res) => {
        this.editForm = false;
        this.createForm = true;
        this.failM = false;
        this.successM = true;
        this.retriveData();
      },
      (error) => {
        this.successM = false;
        this.failM = true;
      }
    );
  }

  deleteData(id) {
    let check = confirm('Hapus data ini ?');
    if (check == true) {
      this.expertiseService.destroy(id);
    }
  }
}
