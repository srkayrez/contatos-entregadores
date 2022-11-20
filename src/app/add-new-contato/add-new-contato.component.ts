import { contatos } from './../list/model';
import { Component, OnInit } from '@angular/core';
import { contato } from '../list/data';

@Component({
  selector: 'app-add-new-contato',
  templateUrl: './add-new-contato.component.html',
  styleUrls: ['./add-new-contato.component.css']
})

export class AddNewContatoComponent implements OnInit {

  mensagem: any
  dataSource = contato
  constructor() { }

  ngOnInit(): void {

  }


  enviarContato() {

    let nome = (<HTMLInputElement>document.getElementById('nome')).value;
    let numero = (<HTMLInputElement>document.getElementById('numero')).value;
    let categoria = (<HTMLInputElement>document.getElementById('categoria')).value;

    let mensagem = "Ola, gostaria de add um contato de " + categoria + " Nome: " + nome + " Numero: " + numero;

    window.open('https://api.whatsapp.com/send?phone=5516999758986&text='+mensagem+'.');

  }






}
