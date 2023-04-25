import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = window.location.href;
  title = 'moments';

  verificar(){
    if(this.url == 'http://localhost:4200'){
      this.url = 'http://localhost:4200/f'
    }
  }
}
