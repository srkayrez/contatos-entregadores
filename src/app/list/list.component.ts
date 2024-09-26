import { contato } from './data';
import { AddNewContatoComponent } from './../add-new-contato/add-new-contato.component';
import { Component, Input, OnInit, Output } from '@angular/core';
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
  dataCostura = Costura;
  dataRodas = Rodas;
  dataGuincho = Guincho;
  dataLojas= Lojas;



  columnsToDisplay = ['contato'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: contatos | null;
  contatos: any;



    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
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
    contato: "ClayCell",
    telefone : 5511957917841,
    localizacao : "https://maps.app.goo.gl/DGcEDdGUuvFFtPYV9",
    temLocal : false
  },
{
    area: "Arrumar Celular",
    contato: "KF Assistec",
    telefone : 5516996285311,
    localizacao : "https://maps.app.goo.gl/DGcEDdGUuvFFtPYV9",
    temLocal : true
  },
  {
    area: "Arrumar Celular",
    contato: "A&R Assisstência e acessórios 1",
    telefone : 5516996417976,
    localizacao : "https://goo.gl/maps/cL7Sm4JoMv35GyGo7",
    temLocal : true
  },
  {
    area: "Arrumar Celular",
    contato: "A&R Assisstência e acessórios 2",
    telefone : 5516982527178,
    localizacao : "https://goo.gl/maps/cL7Sm4JoMv35GyGo7",
    temLocal : true
  },
]

const Borracheiro : contatos[]=[
  {
    area: "Borracheiro",
    contato: "Daniel",
    telefone : 5516996205161,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Yuri Henrique",
    telefone : 5516996224990,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Borracharia Movel 2",
    telefone : 5516996377337,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Borracheiro Indaia 24h",
    telefone : 5516996186254,
    localizacao : null,
    temLocal: false
  },
{
    area: "Borracheiro",
    contato: "Borracharia Sol 1",
    telefone : 5516997654300,
    localizacao : null,
    temLocal: false
  },
{
    area: "Borracheiro",
    contato: "Borracharia Sol 2",
    telefone : 5516997893569,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Zomax 1",
    telefone : 5516997684242,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Borracheiro",
    contato: "Zomax 2",
    telefone : 5516981227036,
    localizacao : null,
    temLocal: false
  },
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
    contato: "Resistence ateliê",
    telefone : 5516997921846,
    localizacao : "https://maps.app.goo.gl/aV8dAzWWuEsQzfDE6",
    temLocal: true
  },
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
]
const Rodas : contatos[] = [
 {
    area: "Arrumar Rodas",
    contato: "Fabiano rodas",
    telefone : 5516991028660,
    localizacao : null,
    temLocal: false
  },
  {
    area: "Arrumar Rodas",
    contato: "Gah Rodas",
    telefone : 5516991964343,
    localizacao : 'https://goo.gl/maps/ERJcx3WhQT9SsG1Q6',
    temLocal: true
  },
]

const Guincho : contatos[] =[
{
    area: "Guincho",
    contato: "Anésio",
    telefone: 5516997662752,
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
    area: "Guincho",
    contato: "Matheus Guincho",
    telefone: 5516996364918,
    temLocal: false
  },
  {
    area: "Guincho",
    contato: "Araraquara moto guincho",
    telefone: 5516997907574,
    temLocal: false
  },

 
]

const Lojas: contatos[] = [
  {
    area: "Lojas",
    contato: "Rafael Manguito",
    telefone: 5516997555587,
    localizacao: null,
    temLocal: false
  },

]
