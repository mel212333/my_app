import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interfaces';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
})
export class SlideShowComponent implements AfterViewInit, OnInit {
  @Input() movies?: Movie[];
  mySwiper?: Swiper;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('movies', this.movies);
  }

  ngAfterViewInit(): void {
    if (this.movies && this.movies.length > 0) {
      this.mySwiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
      });
    }
  }
  detalle(movie: Movie) {
    this.router.navigate(['/pelicula/', movie.id]);
  }

  onSilderPrev() {
    this.mySwiper?.slidePrev();
  }

  next() {
    this.mySwiper?.slideNext();
  }
}
