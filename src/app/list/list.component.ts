import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { AddNewContatoComponent } from '../add-new-contato/add-new-contato.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
]),
],
  })

export class ListComponent implements OnInit {

  dataSource = contato;
  columnsToDisplay = ['contato'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: contatos | null;
  contatos: any;

    constructor(public dialog: MatDialog) {}

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

  ngOnInit(): void {
  }

}
export interface contatos {
  area : string,
  contato : string,
  telefone : number,
  localizacao ?: string,
}


const contato : contatos[] = [
  {
    area: "Arrumar Celular",
    contato: "Arrumar Celular A&R Assisstência 1",
    telefone : 16996417976,
    localizacao : "https://goo.gl/maps/cL7Sm4JoMv35GyGo7"
  },
  {
    area: "Arrumar Celular",
    contato: "Arrumar Celular A&R Assisstência 2",
    telefone : 5516982527178,
    localizacao : ""
  },
  {
    area: "Borracheiro",
    contato: "Paulo Borracharia da 40",
    telefone : 5516988565764,
    localizacao : ""
  },
  {
    area: "Borracheiro",
    contato: "Borracharia Brasil",
    telefone : 5516997684242,
    localizacao : ""
  },
  {
    area: "Borracheiro",
    contato: "Rodrigo Borracheiro",
    telefone : 5516997784732,
    localizacao : ""
  },
  {
    area: "Borracheiro",
    contato: "Edson Borracheiro",
    telefone : 5516996377337,
    localizacao : ""
  },
  {
    area: "Borracheiro",
    contato: "Edson Borracheiro 2",
    telefone : 5516988206629,
    localizacao : ""
  },
  {
    area: "Borracheiro",
    contato: "Juninho Borracheiro",
    telefone : 5516997752007,
    localizacao : ""
  },
  {
    area: "Borracheiro",
    contato: "Borracharia 02 Brothers - Fabio",
    telefone : 5516981146513,
    localizacao : ""
  },
  {
    area: "Borracheiro",
    contato: "Borracharia 02 Brothers - Angelo",
    telefone : 5516996332655,
    localizacao : ""
  },
  {
    area: "Costura",
    contato: "Oficina da Costura",
    telefone : 5516997372733,
    localizacao : "https://g.page/Oficinacosturaabelharainha?share"
  },
  {
    area: "Costura",
    contato: "Iracema Costureira",
    telefone : 5516981267661,
    localizacao : "https://goo.gl/maps/3zgUUkKrXyVQaqZCA"
  },
  {
    area: "Costura",
    contato: "Phenix Bolsas",
    telefone : 5516991666429,
    localizacao : "https://goo.gl/maps/V8btF2cTpVkf97Qz6"
  },
  {
    area: "Costura",
    contato: "Arrumar Bag Lorise",
    telefone : 5516997095736,
    localizacao : "https://goo.gl/maps/yhWF5sZNUyNnTJyTA"
  },
  {
    area: "Arrumar Rodas",
    contato: "Arrumar Rodas Gah Rodas",
    telefone : 5516991964343,
    localizacao : ""
  },
  {
    area: "Guincho",
    contato: "Cocada Guincho",
    telefone : 5516997907574,
    localizacao : ""
  },
  {
    area: "Guincho",
    contato: "Moto Reboque Araraquara-SP",
    telefone : 5516999750089,
    localizacao : ""
  },
  {
    area: "Guincho",
    contato: "Briba Moto Guincho",
    telefone : 5516991163800,
    localizacao : ""
  },
  {
    area: "Lojas",
    contato: "Julio peças",
    telefone : 5516997465840,
    localizacao : ""
  },
  {
    area: "Lojas",
    contato: "Peças para moto",
    telefone : 5516997611688,
    localizacao : ""
  },
]
