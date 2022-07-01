import { Component, OnInit } from "@angular/core";
import { AlbumsService } from "../service/albums.service";
import { Albums } from "../interfaces/interfaces.albums";
@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"],
})
export class AlbumsComponent implements OnInit {
  Response: any;
  str = '';
  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.Albums().subscribe((data: Albums) => {
      this.Response = data;
    });
  }
}
