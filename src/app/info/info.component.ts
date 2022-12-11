import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewContatoComponent } from '../add-new-contato/add-new-contato.component';
import { MatSnackBar, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig  } from '@angular/material/snack-bar';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers:[
  {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class InfoComponent implements OnInit {
  contatos: any;

  dataSource = Parceiros

  displayedColumns: string[] = ['Parceiros','Opcao'];

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    ) { }


    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 40000,
        panelClass: "success-dialog"
    });
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

  copy(): void {
    let valueToCopy = '45de5eb2-f00b-4001-a8ef-77ce05a03951'

      document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (valueToCopy));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand("copy")

    this.openSnackBar('Chave pix copiada com sucesso','Ok')
  }

  ngOnInit() {
  }

  openWhatsApp(element): void {
    window.open('https://wa.me/' + element.telefone)
  }

  openTelefone(element): void {
    window.open('tel:' + element.telefone);
  }

  openMap(element): void {
    window.open(element.localizacao)
  }

  reportContato(element): void {
    window.open('https://api.whatsapp.com/send?phone=5516997955989&text=' + 'Gostaria de denunciar o contato ' + element.contato)
  }
}

  export interface contatoespecial {
    area : string,
    contato : string,
    telefone : number,
    telefone2 : number,
    localizacao ?: string,
    temLocal : boolean,
  }

  const Parceiros : contatoespecial[] = [
    {
      area: "Parceiros",
      contato: "Disk Água Pura",
      telefone : 1633334212,
      telefone2 : 1633371925,
      localizacao : "https://goo.gl/maps/FxsehrWH4zCAyVRaA",
      temLocal : true
    },
  ]

