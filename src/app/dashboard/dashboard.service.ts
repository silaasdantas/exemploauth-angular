import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  public obterUsuarios(): Promise<Usuario[]> {
    return this.http.get(`${this.baseUrl}/api/values/users`, this.httpOptions)
      .toPromise()
      .then((response: Usuario[]) => response);
  }
}
