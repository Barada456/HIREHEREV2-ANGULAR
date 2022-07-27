export class Project {
  projectId : any;

	projectName : any;

	clientName: any;

	clientLocation: any;

	projectStartDate: any;

	projectEndDate: any;

	projectLogo: any;



  constructor(projectId: any, projectName: any, clientName: any, clientLocation: any, projectStartDate: any, projectEndDate: any, projectLogo: any) {
    this.projectId = projectId;
    this.projectName = projectName;
    this.clientName = clientName;
    this.clientLocation = clientLocation;
    this.projectStartDate = projectStartDate;
    this.projectEndDate = projectEndDate;
    this.projectLogo = projectLogo;

  }

}
