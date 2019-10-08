import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  NewEmployee = {
    EmployeeId: "",
    FirstName: "",
    LastName: "",
    EmailAddress: ""
  }
  
  constructor(private dataService: DataService, 
      private route: ActivatedRoute, 
      private router: Router) { }

  ngOnInit() {
  }

  submitEmployee() {
    this.dataService.addEmployee(this.NewEmployee).subscribe((data: any[]) => {
      this.NewEmployee.EmployeeId = "";
      this.NewEmployee.FirstName = "";
      this.NewEmployee.LastName = "";
      this.NewEmployee.EmailAddress = "";
      this.router.navigate(["/list"]);
      console.log(data);
    })
  }

}
