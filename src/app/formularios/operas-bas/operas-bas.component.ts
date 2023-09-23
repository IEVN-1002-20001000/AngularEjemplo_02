import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1='';
  num2='';
  resultado:number=0;
  sumar(){
    this.resultado=parseInt(this.num1) + parseInt(this.num2);
  }
  restar(){
    this.resultado=parseInt(this.num1) - parseInt(this.num2);
  }
  multiplicar(){
    this.resultado=parseInt(this.num1) * parseInt(this.num2);
  }
  dividir(){
    this.resultado=parseInt(this.num1) / parseInt(this.num2);
  }
}
