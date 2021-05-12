import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User{

}

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  public url: string;

  public httpHeader = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(
    private _httpClient: HttpClient
  ) { 
    this.url = "https://reqres.in/";
  }

  getUser(id): Observable<User>{
    return this._httpClient.get<User>(this.url + 'api/users/' + id); // petición AJAX por http
  }
}
