import axios, { AxiosResponse } from "axios";
import { Urls, getUrls } from "../config/Urls";
import { UnsuccessfulFetchError } from "../errors/UnsuccessfulFetchError";
import { IBaseService } from "./interfaces/IBaseService";

export abstract class BaseService /*implements IBaseService*/{
  protected urls: Urls;
  private relativeControllerPath: string;
  
  constructor(relativeControllerPath: string) {
    this.urls = getUrls();
    this.relativeControllerPath = relativeControllerPath;
    
  }

  protected async get<T>(relativeUrl: string): Promise<T> {
    const response: AxiosResponse<T> = await axios.get(this.buildUrl(relativeUrl));

    // 2xx response range
    if (response.status >= 200 && response.status <= 226) {
      return response.data;
    }

    throw new UnsuccessfulFetchError<T>(response);
  }
  protected post<T>(relativeUrl: string, payload: object): Promise<T> {
    throw new Error("Method not implemented.");
  }

  private buildUrl(relativeUrl: string): string {
    return `${this.urls.baseApiUrl}/${this.relativeControllerPath}/${relativeUrl}`;
  }
}