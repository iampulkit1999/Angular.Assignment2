import { Component, OnInit } from '@angular/core';
import { InterEmployee } from 'src/app/employee/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2';
  

  public employeeList : InterEmployee[];

  constructor(){
    this.employeeList  = this.EmployeeData();
    
  }
  public EmployeeData(){

    return [ 
      {id: "1", fName: "MSD", lName: "Dhoni", dept: "Captain", city: "Ranchi", mail: "mahi.dhoni@gmail.com"},
      {id: "2", fName: "Steve", lName: "Smith", dept: "Vice Captain", city: "Canberra", mail: "steve.smith@gmail.com"},
      {id: "3", fName: "Virat", lName: "Kohli", dept: "Batsman", city: "Delhi", mail: "virat.kohli@gmail.com"},
      {id: "4", fName: "Tom", lName: "Hanks", dept: "Actor", city: "London", mail: "tom.hanks@gmail.com"},
      {id: "5", fName: "Jonty", lName: "Rhodes", dept: "Fielder", city: "Capetown", mail: "jonty.rhodes@gmail.com"},
    ];

  }
}

