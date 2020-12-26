/* eslint-disable @typescript-eslint/no-useless-constructor */

import { JobTitleResponseModel } from "../models/JobTitles/JobTitleResponseModel";
import { BaseService } from "./BaseService";

class JobTitlesService extends BaseService {
  /**
   *
   */
  constructor(relativeControllerPath: string) {
    super(relativeControllerPath);
    
  }
  
  public async GetAllJobTitlesAsync(): Promise<JobTitleResponseModel[]> {
    const jobTitlesResponse = await this.get<JobTitleResponseModel[]>("");
    return jobTitlesResponse;
  }
}


export default new JobTitlesService("jobTitles");