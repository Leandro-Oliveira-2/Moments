import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  alertaSucesso(mensagem: string) {
    Swal.fire({
      title: 'PARABÉNS',
      text: mensagem,
      icon: 'success'
    });
  }

  alertaErro(mensagem: string) {
    Swal.fire({
      title: 'Erro',
      text: mensagem,
      icon: 'error'
    });
  }
}
