import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../service/photos.service';
import { Config } from '../interfaces/interfaces.photos';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  str: string = '';
  Response: any;

  constructor(private photosService: PhotosService) {
    this.photosService.TestovayGalereya().subscribe((data: Config) => {
      this.Response = data;
    });
  }

  ngOnInit() {}

}
