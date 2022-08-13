export class JobDescription {
  public jdId : string ;
  public qualification!: string;
  public domain!: string;
  public skillSets!: string;
  public experienceInYears!: string;
  public positionFor!: string;
  public responsibilites!: string;
  public isApproved!: string;

  constructor(jdId : string ,qualification : any, domain : string, skillSets : string, experienceInYears : string, positionFor : string, responsibilites : string, isApproved : string) {
    this.jdId = jdId;
    this.qualification = qualification;
    this.domain = domain;
    this.skillSets = skillSets;
    this.experienceInYears = experienceInYears;
    this.positionFor = positionFor;
    this.responsibilites = responsibilites;
    this.isApproved = isApproved;

  }

}
