import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Albums } from "../interfaces/interfaces.albums";

@Injectable({
  providedIn: "root",
})
export class AlbumsService {
  url = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) {}

  Albums() {
    return this.http.get<Albums>(this.url);
  }
}
