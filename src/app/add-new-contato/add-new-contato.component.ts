import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { contatos } from './../list/model';
import { Component, OnInit } from '@angular/core';
import { contato } from '../list/data';
import { DialogRef } from '@angular/cdk/dialog';
import { Category } from './DTOs/category.type'

@Component({
  selector: 'app-add-new-contato',
  templateUrl: './add-new-contato.component.html',
  styleUrls: ['./add-new-contato.component.css']
})

export class AddNewContatoComponent implements OnInit {

  mensagem: any
  dataSource = contato
  category : any

  categories : Category[] = [
    {
      category: 'Arrumar Celular'
    },
    {
      category: 'Arrumar Rodas'
    },
    {
      category: 'Borracheiro'
    },
    {
      category: 'Costura'
    },
    {
      category: 'Guincho'
    },
    {
      category: 'Lojas'
    },
    {
      category: 'Outro'
    },
  ]

  constructor(
    public dialogRef: MatDialogRef<AddNewContatoComponent>,
    ) { }



  ngOnInit(): void {

  }

  getCategoryValue(value) : void {
    this.category = value
  }

  enviarContato() {

    let nome = (<HTMLInputElement>document.getElementById('nome')).value;
    let numero = (<HTMLInputElement>document.getElementById('numero')).value;
    let categoria = this.category;
    let mensagem = "Ola, gostaria de add um contato de " + categoria + " Nome: " + nome + " Numero: " + numero;

    window.open('https://api.whatsapp.com/send?phone=5516997955989&text='+mensagem+'.');


  }

  closeModal():void {
    this.dialogRef.close();
  }




}
