import { Directive,OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit {

  @Input('appForIn')number!: number[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.number)
  }
  
}

