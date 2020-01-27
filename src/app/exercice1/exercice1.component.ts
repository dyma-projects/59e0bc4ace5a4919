import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  title: string;
  inputType: string;


  constructor() { }

  ngOnInit() {
    this.title = 'Interpolation de variable';
    this.inputType = 'number';
  }

  display(): void {
    console.log('liaison d\'event');
  }

}
