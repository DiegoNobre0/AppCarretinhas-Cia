import { Component } from '@angular/core';
import { SlideInterface } from 'src/app/model/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides: SlideInterface[] = [
    { url: '/assets/carretinhas/carreta-aberta-2.png', title: 'carreta-aberta-2' },
    { url: '/assets/carretinhas/carreta-aberta-fazendinha.png', title: 'carreta-aberta-fazendinha' },
    // { url: '/assets/carretinhas/carreta-bau-2', title: 'carreta-bau-2' },
    // { url: '/assets/carretinhas/carreta-gas', title: 'carreta-gas' },
    { url: '/assets/carretinhas/carreta-jetskis.png', title: 'carreta-jetskis' },
    { url: '/assets/carretinhas/carreta-moto.png', title: 'carreta-moto.png' },
    { url: '/assets/carretinhas/carreta-prancha-dois-eixos.png', title: 'carreta-prancha-dois-eixos' },
    { url: '/assets/carretinhas/carreta-transporte-animal.png', title: 'carreta-transporte-animal' },
    { url: '/assets/carretinhas/carreta-transporte-barco.png', title: 'carreta-transporte-barco' },
    { url: '/assets/carretinhas/carreta-transporte-leve.png', title: 'carreta-transporte-leve' },
    { url: '/assets/carretinhas/carreta-transporte-quadriciclo-2.png', title: 'carreta-transporte-quadriciclo-2' },
    // { url: '/assets/carretinhas/carreta-transporte-quadricilo.png', title: 'carreta-transporte-quadricilo' },
  ];
}
