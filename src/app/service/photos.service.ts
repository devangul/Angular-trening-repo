import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from '../interfaces/interfaces.photos'

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  

  url: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

TestovayGalereya(){
return  this.http.get<Config>(this.url);
  
}

}
