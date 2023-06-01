import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const imageElement = document.getElementById('imagem');

    imageElement.addEventListener('mouseover', () => {
      imageElement.setAttribute('src', 'https://github.com/srkayrez/contatos-entregadores/blob/master/src/assets/route%20red.png?raw=true');
    });
    
    imageElement.addEventListener('mouseout', () => {
      imageElement.setAttribute('src', 'https://github.com/srkayrez/contatos-entregadores/blob/master/src/assets/route.png?raw=true');
    });   

    const imagemElement = document.getElementById('imagem2');

    imagemElement.addEventListener('mouseover', () => {
      imagemElement.setAttribute('src', 'https://github.com/srkayrez/contatos-entregadores/blob/master/src/assets/calculator%20red.png?raw=true');
    });
    
    imagemElement.addEventListener('mouseout', () => {
      imagemElement.setAttribute('src', 'https://github.com/srkayrez/contatos-entregadores/blob/master/src/assets/calculator.png?raw=true');
    });   

    const btnRotas = document.getElementById('btn-rotas')
    const btnCalculadora = document.getElementById('btn-calculadora')

    btnRotas.addEventListener('click',() => alert('Funcionalidade sendo criada'))
    btnCalculadora.addEventListener('click',() => alert('Funcionalidade sendo criada'))
  }

  


}
