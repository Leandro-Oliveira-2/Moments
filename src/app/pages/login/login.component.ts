import { Component, OnInit, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @ViewChild('myDiv', { static: true }) myDiv: any;

  constructor(  private elementRef: ElementRef,
    private renderer: Renderer2
    ) { }

  ngOnInit(): void {
    this.myDiv = this.elementRef.nativeElement.querySelector('#myDiv');
    console.log(this.myDiv);
  }

  onSignInClick() {
    console.log(this.myDiv);
    this.myDiv.className = 'sign-in-js';
  }

  logar(){

  }

  cadastrar(){

  }

  onSignUpClick() {
    console.log(this.myDiv);
    this.myDiv.className = 'sign-up-js';
  }

}
