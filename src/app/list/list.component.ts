import { contatos } from './model';
import { Component, OnInit } from '@angular/core';
import { contato } from './data';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  expandedElement: PeriodicElement | null;



  constructor(

    ) { }


  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  contato: string;
  numero: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {
    contato: 'Arrumar Celular A&R Assisstência 1',
    numero: 5516996417976,
  },
  {
    contato: 'Arrumar Celular A&R Assisstência 2',
    numero: 5516997955989,
  },

];
