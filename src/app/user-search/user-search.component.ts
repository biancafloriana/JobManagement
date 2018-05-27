import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  @ViewChild('newForm') newForm: NgForm;
  propertyTypes: Array<string> = ['interests','name'];
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
    this.message$ ="";
  }

  }


