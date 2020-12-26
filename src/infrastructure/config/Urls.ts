// class Url {
  
// }

export interface Urls {
  baseApiUrl: string;
}

class DevUrls implements Urls {
  baseApiUrl: string = "http://localhost:5000/api";
}

class ProdUrls implements Urls {
  baseApiUrl: string = "??";
}

export function getUrls(): Urls {
  switch (process.env.NODE_ENV) {
    case "development":
      return new DevUrls();
    case "production":
      return new ProdUrls();
    default:
      throw new Error(`didn't find URL paths for env: ${process.env.NODE_ENV}`)
      
  }
  // would implement all other environments here.
}
