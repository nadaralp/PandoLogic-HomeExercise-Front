import { makeObservable, observable } from "mobx";

export class ConfigStore {
  @observable
  public isDarkThemeEnabled: boolean = true;
  
  /**
   * Ctor
   */
  constructor() {
    makeObservable(this);
  }
}