import { AxiosResponse } from "axios";
import { inherits } from "util";

export class UnsuccessfulFetchError<T> extends Error {
  /**
   *
   */
  constructor(axiosResponse: AxiosResponse<T>) {
    super(`something went wrong\n status: ${axiosResponse.status} - ${axiosResponse.data}`);
    
  }
}