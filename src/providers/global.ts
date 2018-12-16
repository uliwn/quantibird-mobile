import { Injectable } from '@angular/core';


@Injectable() 
export class Global {
  public animateVarible:boolean=false;
  constructor( ) {
    console.log('Hello Global Provider');

  } 
  
  AnimateApp(animateVarible)
  {
    this.animateVarible = animateVarible;
     console.log(this.animateVarible);
  }

}
