import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective
{
  private isTitleHighlighted: boolean = false;
  private isBorderHighlighted: boolean = false;
  private isTextHighlighted: boolean = false;
  private titleInitialBgColor: string;
  private defaultTextColor = '';
  @Input() titleColor = '';
  @Input() borderHighlight = '';
  @Input() hoverTextColor = '';

  constructor(private elm: ElementRef) {
    this.titleInitialBgColor = elm.nativeElement.style.backgroundColor;
    this.defaultTextColor = elm.nativeElement.style.color;
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

  @HostBinding('style.color') get getTextColor() {
    console.log('HostBinding: color', {
      border: this.isTextHighlighted
        ? this.hoverTextColor
        : this.defaultTextColor,
    });
    return this.isTextHighlighted ? this.hoverTextColor : this.defaultTextColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isBorderHighlighted = true;
    this.isTextHighlighted = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isBorderHighlighted = false;
    this.isTextHighlighted = false;
  }

  private highlight(border: boolean) {
    this.elm.nativeElement.style.border = border ? '3px solid red' : 'none';
  }
}
