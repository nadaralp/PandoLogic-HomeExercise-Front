export interface IBaseService {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, payload: object): Promise<T>;
}
