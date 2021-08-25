import { HttpHeaders } from "@angular/common/http";
import { Token } from "./token";

export class BaseService {

  constructor() { }

  protected baseUrl = 'http://localhost:61333';

  protected httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json', "Authorization": "Bearer " + this.getTokenLocalStorage() })
  };

  protected setTokenLocalStorage(token: Token) {
    localStorage.setItem("tokenDeAcesso", token.tokenDeAcesso);
  }
  protected getTokenLocalStorage(): string {
    return localStorage.getItem("tokenDeAcesso");
  }


}
