import { contatos } from './list/model';
import { Component, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewContatoComponent } from './add-new-contato/add-new-contato.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatos-motoboy';
  contatos: any;

  @Output() menu: number;
}

