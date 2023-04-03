import { trigger } from '@angular/animations';
import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  //atributos da classe/componente
  num1: number=0;
  num2: number=0;
  soma: number=0;
  subtracao: number=0;
  multiplicacao: number=0;
  divisao: number=0;

  somar(){
    this.soma=this.num1+this.num2;
  }
  subtrair(){
    this.subtracao=this.num1-this.num2;
  }
  multiplicar(){
    this.multiplicacao=this.num1*this.num2;
  }
  dividir(){
    if(this.num2 == 0){
      alert("Não é possível DIVIDIR por ZERO!");
    }
    else{
      this.divisao=this.num1/this.num2;
    }
  }
  limpar(){
    this.num1=0;
    this.num2=0;
    this.soma=0;
    this.subtracao=0;
    this.multiplicacao=0;
    this.divisao=0;
  }
}