<<<<<<< HEAD
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URL: string = 'https://jsonplaceholder.typicode.com/'

  constructor(private client: HttpClient) {
  }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  createAlbum(newAlbum: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, newAlbum);
  }

  deleteAlbum(id: number) {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`)
  }


}
=======
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URL: string = 'https://jsonplaceholder.typicode.com/'

  constructor(private client: HttpClient) {
  }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  createAlbum(newAlbum: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, newAlbum);
  }

  deleteAlbum(id: number) {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`)
  }


}
>>>>>>> 2b7fc7606ef1912692e8954991b3f1e3dd050455
