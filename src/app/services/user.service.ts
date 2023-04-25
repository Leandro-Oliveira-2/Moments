import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class userService {

  endpoint = 'user';
  api = environment.api;

  constructor(private http: HttpClient) { }

  buscarusuario(email:string){
    return this.http.get<IUser>(`${this.api}/${this.endpoint}/${email}`)
  }

  getUser(){
    return this.http.get<IUser>(`${this.api}/${this.endpoint}`)
  }

  criarUser(user: IUser) {
    return this.http.post(`${this.api}/${this.endpoint}`, user);
  }

}
