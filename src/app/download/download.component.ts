import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewContatoComponent } from '../add-new-contato/add-new-contato.component';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  contatos: any;
  temp: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.temp = 19;
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

}
