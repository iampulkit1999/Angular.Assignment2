import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { InterEmployee } from 'src/app/employee/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  display: boolean = false;
  EditEmployeeId : number;

  constructor() {
    this.EditEmployeeId= 0;
  }

  ngOnInit(): void {
  }


  @Input() employees: any;

}


