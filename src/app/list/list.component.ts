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

  dataSource = ELEMENT_DATA;
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
  description: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {
    contato: 'Hydrogen',
    description: `
    <mat-grid-list cols="2" rowHeight="2:1">
      <mat-grid-tile>
        <img width="30%" src="../../assets/1490889687-whats-app_82529.png">
      </mat-grid-tile>
    </mat-grid-list>`,
  },
  {
    contato: 'Hydrogen',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
];
