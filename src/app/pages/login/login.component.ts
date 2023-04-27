import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HostListener } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { AlertasService } from 'src/app/services/alerta.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  use:IUser = {};
  sucess:boolean = false;

  @ViewChild('myDiv', { static: true }) myDiv: any;

  constructor(  private elementRef: ElementRef,
    private renderer: Renderer2,
    private userService: userService,
    private router: Router,
    private alertaService: AlertasService,
    private LocalStorageService: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.myDiv = this.elementRef.nativeElement.querySelector('#myDiv');
    console.log(this.myDiv);
  }

  cadastroForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  })

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  });


  onSignInClick() {
    console.log(this.myDiv);
    this.myDiv.className = 'sign-in-js';
  }

  logar(){
    this.use.email = this.loginForm.value.email;
    this.use.senha = this.loginForm.value.senha;
    console.log(this.use);
    this.userService.buscarusuario(this.use.email).subscribe((Response)=>{
      this.use = Response;
      if(this.use.senha == this.loginForm.value.senha ){
        this.LocalStorageService.set('albumId',Response);
        this.router.navigateByUrl('home').then(()=>{
          this.alertaService.alertaSucesso("Logado Com Suceso!");
          window.location.reload();
        });
      }else{
        this.alertaService.alertaErro("Email ou Senha Incorreta!");
      }
    },(error)=>{
      if(error.status == 404){
        this.alertaService.alertaErro("Email ou Senha Incorreta!");
      }
    })

  }

  cadastrar(){
    this.use.nome = this.cadastroForm.value.nome;
    this.use.email = this.cadastroForm.value.email;
    this.use.senha = this.cadastroForm.value.senha;

    console.log(this.use);
    this.userService.criarUser({
      nome: this.cadastroForm.value.nome,
      email: this.cadastroForm.value.email,
      senha: this.cadastroForm.value.senha
    }).subscribe((Response)=>{
      this.alertaService.alertaSucesso("cadastro feito com Suceso!");
    },(error)=>{
      if(error.status == 400 && this.cadastroForm.value.nome == '' ){
        this.alertaService.alertaErro("Campo nome não preenchido!");
      }else if(error.status == 400 && this.cadastroForm.value.senha == '' )
      this.alertaService.alertaErro("Campo senha não preenchido!");
      else if(error.status == 400 && this.cadastroForm.value.email == '' )
      this.alertaService.alertaErro("Campo email não preenchido!");
    });
  }


  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    window.location.reload();
  }

  @HostListener('window:pushstate', ['$event'])
  onPushState(event: any) {
    window.location.reload();
   }

  onSignUpClick() {
    console.log(this.myDiv);
    this.myDiv.className = 'sign-up-js';
  }

}
