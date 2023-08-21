import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeObj: EmployeeObj;
  sortBy: string;
  searchBy: string;
  employeeArray: EmployeeObj[] = [];

  constructor() {
    this.employeeObj = new EmployeeObj();
    this.searchBy = '';
    this.sortBy = '';
  }
  ngOnInit(): void {
    this.getAllEmployee();
  }

  OnSave() {
    // this.employeeArray.push(this.employeeObj);
    const isData = localStorage.getItem("EmpData");
    if (isData == null) {
      const newArr = [];
      newArr.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(newArr));
    } else {
      const oldData = JSON.parse(isData);
      oldData.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(oldData));

    }
  }


  getAllEmployee() {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.employeeArray = localData;
    }
  }


}

export class EmployeeObj {
  FirstName: string;
  LastName: string;
  Technology: string;
  Designation: string;
  Skill: string;
  Core: string;
  IsCertifiction: string;
  Certification: string;
  Company: string;
  FewDetails: string;

  constructor() {
    this.FirstName = "";
    this.LastName = "";
    this.Technology = "";
    this.Designation = "";
    this.Skill = "";
    this.Core = "";
    this.IsCertifiction = '';
    this.Certification = '';
    this.Company = "";
    this.FewDetails = "";

  }

}





