import { ConfigStore } from "./ConfigStore";
import { JobsStore } from "./JobsStore";

export class RootStore {
  public JobsStore: JobsStore = new JobsStore(); 
  public ConfigStore: ConfigStore = new ConfigStore();
}