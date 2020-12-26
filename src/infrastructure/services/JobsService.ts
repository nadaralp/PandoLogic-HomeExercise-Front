/* eslint-disable @typescript-eslint/no-useless-constructor */
import { JobResponseModel } from "../models/Jobs/JobResponseModel";
import { BaseService } from "./BaseService";

export class JobsService extends BaseService {
   /**
   *
   */
    constructor(relativeControllerPath: string) {
        super(relativeControllerPath);
  }
  
  public async GetAllJobsByJobTitleId(jobTitleId: number): Promise<JobResponseModel[]> {
    const jobs = await this.get<JobResponseModel[]>(`${jobTitleId}`);
    return jobs;
  }
}


export default new JobsService("jobs");