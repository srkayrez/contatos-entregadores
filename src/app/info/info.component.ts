import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewContatoComponent } from '../add-new-contato/add-new-contato.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  contatos: any;

  constructor(public dialog: MatDialog) { }

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

  ngOnInit() {
  }

}
