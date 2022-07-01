import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Albums } from "../interfaces/interfaces.albums";

@Injectable({
  providedIn: "root",
})
export class AlbumsService {
  url: string | any;
  constructor(private http: HttpClient) {}

  Albums() {
    return this.http.get<Albums>(this.url);
  }
}
