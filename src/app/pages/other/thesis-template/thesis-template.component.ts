import { Component, OnInit } from '@angular/core';
import { TemplateThesisService } from 'src/app/services/templateThesis/template-thesis.service';

@Component({
  selector: 'app-thesis-template',
  templateUrl: './thesis-template.component.html',
  styleUrls: ['./thesis-template.component.css']
})


export class ThesisTemplateComponent implements OnInit {

  thesisTemplate: any;
  thesisTemplateEdit: any;
  templateData = {
    section_name: ''
  };
  templateDataEdit = {
    section_name: ''
  };
  successM = false;
  failM = false;
  createForm = true;
  editForm = false;

  constructor(private service: TemplateThesisService) { }

  ngOnInit(): void {
    this.retriveData();
  }

  retriveData() {
    this.service.getAll()
      .subscribe(res => {
        this.thesisTemplate = res;
      }, error => {
        console.log(error);
      });
  }

  saveData() {
    const data = {
      section_name: this.templateData.section_name
    }
    this.service.create(data)
      .subscribe(res => {
        this.failM = false;
        this.successM = true;
        this.templateData.section_name = '';
        this.ngOnInit();
      }, error => {
        this.successM = false;
        this.failM = true;
      });
  }

  clearForm() {
    this.successM = false;
    this.failM = false;
    this.templateData = {
      section_name: ''
    };
  }

  editData(id) {
    this.service.getById(id)
      .subscribe(res => {
        this.thesisTemplateEdit = res;
        this.templateDataEdit.section_name = this.thesisTemplateEdit.section_name;
        this.createForm = false;
        this.editForm = true;
      }, error => {
        console.log(error);
      });
  }

  updateData(id) {
    const data = {
      section_name: this.templateDataEdit.section_name
    };
    this.service.update(id, data)
      .subscribe(res => {
        this.failM = false;
        this.successM = true;
        this.editForm = false;
        this.createForm = true;
        this.ngOnInit();
      }, error => {
        this.successM = false;
        this.failM = true;
        this.ngOnInit();
      })
  }

  cancelEdit() {
    this.clearForm();
    this.successM = false;
    this.failM = false;
    this.editForm = false;
    this.createForm = true;
  }

  deleteData(id) {
    var check = confirm('Hapus Data ini ?');
    if (check === true) {
      this.service.destroy(id)
        .subscribe(res => {
          alert('Data berhasil dihapus');
          this.ngOnInit();
        }, error => {
          alert('Data gagal dihapus');
          this.ngOnInit();
        });
    }

  }

}