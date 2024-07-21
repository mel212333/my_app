import { Component, Input, AfterViewInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits.interfaces';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.css'],
})
export class CastSlideShowComponent implements AfterViewInit {
  @Input() cast?: Cast[];

  constructor() {}

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
    });
  }

  ngOnInit(): void {
    console.log(this.cast);
  }
}
