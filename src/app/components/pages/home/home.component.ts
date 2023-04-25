import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albuns:any
  mdm: String = "";

  url: String = 'https://www.netflix.com/browse';

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    window.location.reload();
  }

  @HostListener('window:pushstate', ['$event'])
  onPushState(event: any) {
    window.location.reload();
   }

  Redirecionando(){

  }

  acessarAlbum(album:any){

  }


}
