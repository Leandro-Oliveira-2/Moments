import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = window.location.href;
  title = 'moments';

  OnInit(){
    console.log(this.url);
  }

}
