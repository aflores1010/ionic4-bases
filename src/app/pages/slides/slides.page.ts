import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  public hide = false;

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/material-slides/slides/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },
    {
      img: '/assets/material-slides/slides/music-player-2.svg',
      titulo: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí'
    },
    {
      img: '/assets/material-slides/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición'
    },
    {
      img: '/assets/material-slides/slides/placeholder-1.svg',
      titulo: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás!'
    }
  ];

  constructor( private navController: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.hide = true;
    this.navController.navigateBack('/');
  }

}
