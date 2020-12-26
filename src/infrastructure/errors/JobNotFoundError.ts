export class JobNotFoundError extends Error{
  /**
   *
   */
  constructor(jobTitle: string) {
    super(`Job wasn't found for job title ${jobTitle}`);
    
  }
}