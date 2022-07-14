import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTituloCabecera]'
})
export class TituloCabeceraDirective {

  constructor(private element: ElementRef) {

    element.nativeElement.style.fontSize = '20px';
    element.nativeElement.style.fontWeight = 'bold';
   }

}
