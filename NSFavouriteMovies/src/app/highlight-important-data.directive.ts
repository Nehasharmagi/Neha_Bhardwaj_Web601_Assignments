import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective
{

  private isBorderHighlighted: boolean = false;
  private defaultTextColor = '';
  @Input() borderHighlight = '';


  constructor(private elm: ElementRef) {
    this.defaultTextColor = elm.nativeElement.style.color;
  }


  @HostBinding('style.border') get getBorder() {
    console.log('HostBinding: border', {
      border: this.isBorderHighlighted ? this.borderHighlight : 'none',
    });
    return this.isBorderHighlighted ? this.borderHighlight : 'none';
  }



  @HostListener('mouseenter') onMouseEnter() {
    this.isBorderHighlighted = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isBorderHighlighted = false;
  }

  private highlight(border: boolean) {
    this.elm.nativeElement.style.border = border ? '3px solid red' : 'none';
  }
}
