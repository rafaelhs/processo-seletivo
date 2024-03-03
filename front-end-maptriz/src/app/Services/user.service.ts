import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/shared/models/user';
import { environment } from 'src/environments/environment';

const url: string = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getUsers() {
    let options = this.getStandardOptions();
    return this.http.get(url + '/user', options);
  }

  login(user: User) {
    let options = this.getStandardOptions();
    return this.http.post(url + '/user', user);
  }

  saveUser(user: User) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'value-need-for-authorization')
    return this.http.post(url + '/user/create', user);
  }
  
}
