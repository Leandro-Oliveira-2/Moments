import { Component, OnInit, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  use:IUser = {};

  @ViewChild('myDiv', { static: true }) myDiv: any;

  constructor(  private elementRef: ElementRef,
    private renderer: Renderer2,
    private user: userService
    ) { }

  ngOnInit(): void {
    this.myDiv = this.elementRef.nativeElement.querySelector('#myDiv');
    console.log(this.myDiv);
  }

  loginForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  })

  onSignInClick() {
    console.log(this.myDiv);
    this.myDiv.className = 'sign-in-js';
  }

  logar(){

  }

  cadastrar(){
    this.use.nome = this.loginForm.value.nome;
    this.use.email = this.loginForm.value.email;
    this.use.senha = this.loginForm.value.senha;

    console.log(this.use);
    this.user.criarUser({
      nome: this.loginForm.value.nome,
      email: this.loginForm.value.email,
      senha: this.loginForm.value.senha
    }).subscribe((Response)=>{

    });
  }

  onSignUpClick() {
    console.log(this.myDiv);
    this.myDiv.className = 'sign-up-js';
  }

}
