import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective
{

  private isTitleHighlighted: boolean = false;
  private isBorderHighlighted: boolean = false;
  private titleInitialBgColor: string;
  @Input() titleColor = '';
  @Input() borderHighlight = '';

  constructor(private elm: ElementRef) {
    this.titleInitialBgColor = elm.nativeElement.style.backgroundColor;
  }
  @HostBinding('style.backgroundColor') get textColor() {
    return this.isTitleHighlighted ? this.titleColor : this.titleInitialBgColor;
  }
  @HostListener('click') onClick() {
    this.isTitleHighlighted = !this.isTitleHighlighted;
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
