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
      this.employeeObj.EmployeeId = 0;
      newArr.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(newArr));
    } else {
      const oldData = JSON.parse(isData);
      const newId = oldData.length + 1;
      this.employeeObj.EmployeeId = newId;
      oldData.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(oldData));

    }
    this.employeeObj = new EmployeeObj();
    this.getAllEmployee();
  }



  onEdit(item: EmployeeObj) {
    this.employeeObj = item;
  }

  onDelete(item: EmployeeObj) {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      for (let index = 0; index < localData.length; index++) {
        if (localData[index].EmployeeId == item.EmployeeId) {
          localData.splice(0, 1);
        }
      }
      localStorage.setItem("EmpData", JSON.stringify(localData));
      this.getAllEmployee();
    }
  }


  getAllEmployee() {
    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.employeeArray = localData;
    }
  }


  onReset(){
    this.employeeObj = new EmployeeObj();
  }


}

export class EmployeeObj {
  EmployeeId: number;
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
    this.EmployeeId = 0;
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





