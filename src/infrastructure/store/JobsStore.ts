import { action, makeObservable, observable, toJS } from "mobx";
import { Nullable } from "../Helpers/TypeHelpers";
import { JobResponseModel } from "../models/Jobs/JobResponseModel";
import { JobTitleResponseModel } from "../models/JobTitles/JobTitleResponseModel";
import JobTitlesService from "../services/JobTitlesService";
import JobsService from "../services/JobsService";
import { JobNotFoundError } from "../errors/JobNotFoundError";

export class JobsStore {
    /**
     * Props
     */
    @observable
    public jobTitles: Nullable<JobTitleResponseModel[]>;

    @observable
    public currentSearchedJobTitle: Nullable<string> = undefined;

    @observable
    public currentSelectedJob: Nullable<JobResponseModel>;

    @observable
    public relevantSearchJobs: JobResponseModel[] = [];

    @observable
    public areJobsLoading: boolean = false;

    @observable
    public jobNotFoundJobNameAttemp: Nullable<string>;

    /**
     * Ctor
     */
    constructor() {
        makeObservable(this);
    }

    /**
     * Actions
     */

    @action
    async GetAllJobTitlesAsync(): Promise<JobTitleResponseModel[]> {
        if (!this.jobTitles) {
            const jobTitles = await JobTitlesService.GetAllJobTitlesAsync();
            this.jobTitles = jobTitles;
        }
        return toJS(this.jobTitles);
    }

    @action
    async GetAllJobsByJobTitleId(jobTitleId: number) {
        this.areJobsLoading = true;
        const jobs = await JobsService.GetAllJobsByJobTitleId(jobTitleId);

        // To make nice visionary effect for loading.
        window.setTimeout(() => {
            this.areJobsLoading = false;
        }, 500);

        return toJS(jobs);
    }

    @action
    async FilterSelectedJobAndGetJobs(
        jobName: string
    ): Promise<JobResponseModel[]> {
        if (!this.jobTitles) throw new Error("no job titles");
        var jobs = this.jobTitles.filter((job) => job.jobTitleName === jobName);
        if (!jobs || jobs.length === 0) {
            throw new JobNotFoundError(jobName);
        }

        const relevantJobs = await this.GetAllJobsByJobTitleId(
            jobs[0].jobTitleId
        );
        
        this.jobNotFoundJobNameAttemp = undefined;
        this.relevantSearchJobs = relevantJobs;
        this.currentSearchedJobTitle = jobName;
        return toJS(relevantJobs);
    }
}
