export class Employee {
  empNo : any;
  empName : any;
  empAddress : any;
  empMobNo : any;
  empEmail : any;
  empDob : any;
  empDoj : any;
  empDesignation : any;
  reportingTo : any;
  empDepartment : any;
  empProfileImage : any;

  isAvailable: any;

  constructor(empNo : any ,empName: any, empAddress: any, empMobNo: any, empEmail: any, empDob: any, empDoj: any, empDesignation: any, reportingTo: any, empDepartment: any, empProfileImage: any, isAvailable : any) {
    this.empNo = empNo;
    this.empName = empName;
    this.empAddress = empAddress;
    this.empMobNo = empMobNo;
    this.empEmail = empEmail;
    this.empDob = empDob;
    this.empDoj = empDoj;
    this.empDesignation = empDesignation;
    this.empDepartment = empDepartment;
    this.reportingTo = reportingTo;
    this.empProfileImage = empProfileImage;
    this.isAvailable = isAvailable;
  }

}
