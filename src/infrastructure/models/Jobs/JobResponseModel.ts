import { Nullable } from "../../Helpers/TypeHelpers";

export class JobResponseModel {
    /**
     *
     */
    constructor(
        public jobId: number,
        public jobTitleId: number,
        public categoryId: number,
        public city: string,
        public state: string,
        public descriptionLength: Nullable<number>,
        public educationLevel: Nullable<number>,
        public clicks: number,
        public applicants: number
    ) {}
}
