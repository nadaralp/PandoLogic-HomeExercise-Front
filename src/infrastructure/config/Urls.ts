// class Url {
  
// }

export interface Urls {
  baseApiUrl: string;
}

class DevUrls implements Urls {
  baseApiUrl: string = "http://localhost:5000/api";
}

class ProdUrls implements Urls {
  baseApiUrl: string = "http://server:5000/api";
}

export function getUrls(): Urls {
  switch (process.env.REACT_APP_ENV) {
    case "production":
      return new ProdUrls();
    case "development":
    default:
      return new DevUrls();
      
  }
  // would implement all other environments here.
}
