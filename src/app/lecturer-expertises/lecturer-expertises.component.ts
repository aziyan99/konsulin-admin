import { Component, OnInit } from '@angular/core';
import { LecturerExpertisesService } from 'src/app/services/lecturer-expertises/lecturer-expertises.service';

@Component({
  selector: 'app-lecturer-expertises',
  templateUrl: './lecturer-expertises.component.html',
  styleUrls: ['./lecturer-expertises.component.css']
})
export class LecturerExpertisesComponent implements OnInit {

  expertises: any;
  newExpertise = {
    expertise_name: ''
  };

  expertise: any;
  editExpertise = {
    id: '',
    expertise_name: ''
  };

  editForm = false;
  addForm = true;

  alert = false;
  alertMessage = '';

  constructor(private service: LecturerExpertisesService) { }

  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    this.service.getAll()
      .subscribe(data => {
        this.expertises = data;
        console.log(data);
      },
        error => {
          console.log(error);
        });
  }

  saveExpertise() {
    if (this.newExpertise.expertise_name == "") {
      this.alert = true;
      this.alertMessage = "Data tidak boleh kosong";
    } else {
      const data = {
        expertise_name: this.newExpertise.expertise_name
      };

      this.service.create(data)
        .subscribe(response => {
          console.log(response);
          this.clearForm();
        }, error => {
          this.alertMessage = error.error.message;
          this.alert = true;
          this.clearForm();
        });
    }
  }

  clearForm() {
    this.alert = false;
    this.newExpertise = {
      expertise_name: ''
    };
    this.retriveData();
  }

  clearEditForm() {
    this.editExpertise = {
      id: '',
      expertise_name: ''
    };
    this.retriveData();
  }

  setUpdateForm(id) {
    this.service.getById(id)
      .subscribe(data => {
        this.expertise = data;
        this.editExpertise = {
          id: this.expertise.id,
          expertise_name: this.expertise.expertise_name
        }
        console.log(data);
        console.log(this.expertise);
        this.editForm = true;
        this.addForm = false;
      }, error => {
        console.log(error);
      });
  }

  updateData(id) {
    const data = {
      expertise_name: this.editExpertise.expertise_name
    };
    this.service.update(id, data)
      .subscribe(response => {
        console.log(response);
        this.editForm = false;
        this.addForm = true;
        this.clearEditForm();
      }, error => {
        console.log(error);
      });
  }

  deleteData(id) {
    this.service.destroy(id)
      .subscribe(response => {
        console.log(response);
        this.retriveData();
      }, error => {
        console.log(error);
      })
  }
}
