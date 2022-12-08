import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewContatoComponent } from '../add-new-contato/add-new-contato.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  contatos: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    document.getElementById("List").style.color = 'red'
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewContatoComponent, {
      width: '250px',
      data: { contato: "", telefone : "", localizacao : ""
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.contatos = result;
    });
  }

  list(): void {
    document.getElementById("List").style.color = 'red'
    document.getElementById("Download").style.color = 'black'
    document.getElementById("Info").style.color = 'black'
    document.getElementById("Clima").style.color = 'black'
  }

  download(): void {
    document.getElementById("List").style.color = 'black'
    document.getElementById("Download").style.color = 'red'
    document.getElementById("Info").style.color = 'black'
    document.getElementById("Clima").style.color = 'black'
  }

  info(): void {
    document.getElementById("List").style.color = 'black'
    document.getElementById("Download").style.color = 'black'
    document.getElementById("Info").style.color = 'red'
    document.getElementById("Clima").style.color = 'black'
  }

  clima(): void {
    document.getElementById("List").style.color = 'black'
    document.getElementById("Download").style.color = 'black'
    document.getElementById("Info").style.color = 'black'
    document.getElementById("Clima").style.color = 'red'
  }

}
