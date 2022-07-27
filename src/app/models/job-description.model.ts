export class JobDescription {
  public qualification!: string;
  public domain!: string;
  public skillSets!: string;
  public experienceInYears!: string;
  public positionFor!: string;
  public responsibilites!: string;

  constructor(qualification : any, domain : string, skillSets : string, experienceInYears : string, positionFor : string, responsibilites : string) {
    this.qualification = qualification;
    this.domain = domain;
    this.skillSets = skillSets;
    this.experienceInYears = experienceInYears;
    this.positionFor = positionFor;
    this.responsibilites = responsibilites;
  }

}
