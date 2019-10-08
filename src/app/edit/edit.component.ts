import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id = "";
  Employee = {
    EmployeeId: "",
    FirstName: "",
    LastName: "",
    EmailAddress: ""
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.dataService.getEmployee(this.id).subscribe((data: any[]) => {
      // console.log(data);
      data.forEach(res => {
        this.Employee.EmployeeId = res.EmployeeId,
        this.Employee.FirstName = res.FirstName,
        this.Employee.LastName = res.LastName,
        this.Employee.EmailAddress = res.EmailAddress
      })
      console.log(this.Employee);
    })
  }

  editEmployee() {
    this.dataService.editEmployee(this.Employee.EmployeeId, this.Employee).subscribe((data: any[]) =>{
      this.router.navigate(["/list"])
    })
  }
  
  goBack() {
    this.router.navigate(["/list"])    
  }

}
