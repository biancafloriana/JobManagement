import { Component, OnInit,ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobServices } from '../services/JobServices';
import { BasicUserControllerComponent } from '../basic-user-controller/basic-user-controller.component';


@Component({
  selector: 'app-search-controller',
  templateUrl: './search-controller.component.html',
  styleUrls: ['./search-controller.component.css']
})
export class SearchControllerComponent implements OnInit {

  @ViewChild('newForm') newForm: NgForm;
  propertyTypes: Array<string> = ['name', 'type', 'company','experience','domain'];
  @Output() msgEvent = new EventEmitter();
  message$ = "";
  constructor() { }

  ngOnInit() {
  }

  onSubmit(data) {
   console.log("input",data);
    this.newForm.reset();
    if(data.SearchText == null || data.type == null){
      this.message$ ="Can't be empty!";
    }else{
      this.message$ ="";
    this.msgEvent.emit(data);
    
    }
   
  }
  onClear(data){
    this.msgEvent.emit(data);
  }
}
