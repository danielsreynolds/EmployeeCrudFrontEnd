import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
  employees = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

   this.dataService.getEmployees().subscribe((data: any[]) => {
      // console.log(data[0]);
      data.forEach(employee => {
        this.employees.push(employee)
      })
      console.log(this.employees);
    })
  }

  sortById() {
    this.employees.sort((a, b) => parseInt(a.EmployeeId) - parseInt(b.EmployeeId))
  }

  sortByFirstName() {
    this.employees.sort((a, b) => a.FirstName.localeCompare(b.FirstName))
  }

  sortByLastName() {
    this.employees.sort((a, b) => a.LastName.localeCompare(b.LastName))
  }

}
