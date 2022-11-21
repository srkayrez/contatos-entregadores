import { AddNewContatoComponent } from './../add-new-contato/add-new-contato.component';
import { Component, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';



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
  displayedColumns: string[] = ['ArrumarCelular','Opcao'];

  dataSource = ArrumarCelular;
  dataSource2 = Borracheiro;
  columnsToDisplay = ['contato'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: contatos | null;
  contatos: any;

  @Output() menu: number = 1;


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

  openWhatsApp(element): void {
    window.open('https://wa.me/' + element.telefone)
  }

  openTelefone(element): void {
    window.open('tel:' + element.telefone);
  }

  openMap(element): void {
    window.open(element.localizacao)
  }



}
export interface contatos {
  area : string,
  contato : string,
  telefone : number,
  localizacao ?: string,
  temLocal : boolean,
}


const ArrumarCelular : contatos[] = [
  {
    area: "Arrumar Celular",
    contato: "Arrumar Celular A&R Assisstência 1",
    telefone : 5516996417976,
    localizacao : "https://goo.gl/maps/cL7Sm4JoMv35GyGo7",
    temLocal : true
  },
  {
    area: "Arrumar Celular",
    contato: "Arrumar Celular A&R Assisstência 2",
    telefone : 5516982527178,
    localizacao : null,
    temLocal : false
  },
]

const Borracheiro : contatos[]=[
  {
    area: "Borracheiro",
    contato: "Paulo Borracharia da 40",
    telefone : 5516988565764,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Borracharia Brasil",
    telefone : 5516997684242,
    localizacao : null,
    temLocal : false,
  },
  {
    area: "Borracheiro",
    contato: "Rodrigo Borracheiro",
    telefone : 5516997784732,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Edson Borracheiro",
    telefone : 5516996377337,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Edson Borracheiro 2",
    telefone : 5516988206629,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Juninho Borracheiro",
    telefone : 5516997752007,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Borracharia 02 Brothers - Fabio",
    telefone : 5516981146513,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Borracharia 02 Brothers - Angelo",
    telefone : 5516996332655,
    localizacao : null,
    temLocal: false
  },
]

const Costura: contatos[] =[
  {
    area: "Costura",
    contato: "Oficina da Costura",
    telefone : 5516997372733,
    localizacao : "https://g.page/Oficinacosturaabelharainha?share",
    temLocal: true
  },
  {
    area: "Costura",
    contato: "Iracema Costureira",
    telefone : 5516981267661,
    localizacao : "https://goo.gl/maps/3zgUUkKrXyVQaqZCA",
    temLocal: true
  },
  {
    area: "Costura",
    contato: "Phenix Bolsas",
    telefone : 5516991666429,
    localizacao : "https://goo.gl/maps/V8btF2cTpVkf97Qz6",
    temLocal: true
  },
  {
    area: "Costura",
    contato: "Arrumar Bag Lorise",
    telefone : 5516997095736,
    localizacao : "https://goo.gl/maps/yhWF5sZNUyNnTJyTA",
    temLocal: true
  },
  {
    area: "Arrumar Rodas",
    contato: "Arrumar Rodas Gah Rodas",
    telefone : 5516991964343,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Guincho",
    contato: "Cocada Guincho",
    telefone : 5516997907574,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Guincho",
    contato: "Moto Reboque Araraquara-SP",
    telefone : 5516999750089,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Guincho",
    contato: "Briba Moto Guincho",
    telefone : 5516991163800,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Lojas",
    contato: "Julio peças",
    telefone : 5516997465840,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Lojas",
    contato: "Peças para moto",
    telefone : 5516997611688,
    localizacao : null,
    temLocal: false
  },
]