import { LocalStorageService } from './../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HostListener } from '@angular/core';
import { albunService } from 'src/app/services/album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albuns:any
  mdm: String = "";
  albumId: any;
  url = window.location.href;
  albumPadrao: boolean = false

  constructor(
    private albumService: albunService,
    private LocalStorageService: LocalStorageService
      ) { }

  ngOnInit(): void {
    this.albumId = this.LocalStorageService.get("albumId");
    console.log(this.albumId);
    this.buscarTodosOsAlbuns();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    if(this.url == "http://localhost:4200/home"){
      this.albumId = this.LocalStorageService.set("albumId",'');
    }
    window.location.reload();
  }

  @HostListener('window:pushstate', ['$event'])
  onPushState(event: any) {

    window.location.reload();
   }

  buscarTodosOsAlbuns(){
    console.log(this.albumId.album)
    this.albumService.buscaralbum(this.albumId.album).subscribe((Response)=>{
      console.log(Response)
      this.albuns = Response;
      console.log(this.albumId.album);
    },(error)=>{
      if(error.status == 400){
        this.albumPadrao = true;
      }
    })
  }

  acessarAlbum(album:any){

  }


}
