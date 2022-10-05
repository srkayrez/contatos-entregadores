import { contatos } from './model';
import { Component, OnInit } from '@angular/core';
import { contato } from './data';

import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  constructor(

    ) { }


  ngOnInit(): void {
  }

}
