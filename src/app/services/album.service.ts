import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user';
import { IAlbum } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class albunService {

  endpoint = 'album';
  api = environment.api;

  constructor(private http: HttpClient) { }

  buscaralbum(albumId:Number){
    return this.http.get<IAlbum>(`${this.api}/${this.endpoint}?album=${albumId}`)
  }

  getUser(){
    return this.http.get<IUser[]>(`${this.api}/${this.endpoint}`)
  }

  criarUser(user: IUser) {
    return this.http.post(`${this.api}/${this.endpoint}`, user);
  }

}
