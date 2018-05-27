import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  @ViewChild('newForm') newForm: NgForm;

  @Output() msgEvent = new EventEmitter();
  message$ = "";
  constructor() { }

  ngOnInit() {
  }

  onSubmit(data) {
   //console.log(data);
   if(data.name == "" || data.company == null || data.experience == null || data.type== null || data.domain == null){
    this.message$="Can't be empty!";
  }else{   
    this.message$="";
    this.newForm.reset();
    this.msgEvent.emit(data);
  }

  }

}
