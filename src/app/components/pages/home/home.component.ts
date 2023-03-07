import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  mdm: String = "";

  url: String = 'https://www.netflix.com/browse';

  constructor() { }

  ngOnInit(): void {
  }

  Redirecionando(){
    
  }


}
