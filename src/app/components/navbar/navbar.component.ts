import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private elementRef: ElementRef
    ) {}

  rotaAtual = ""

  @HostListener('window:scroll', [])
  onWindowScroll(){
    const nav = this.elementRef.nativeElement.querySelector('#nav');

    if (this.rotaAtual === "" && window.scrollY > 90) {
      nav.style.background = '#040708';
      return
    }

    if(this.rotaAtual){
      nav.style.background = '#040708';
      return
    }
    nav.style.background = '#040708';
  }
}
