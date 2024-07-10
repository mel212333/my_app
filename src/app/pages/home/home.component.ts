import { Component, HostListener, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy{
  movie: Movie[] = [];
  movieSildeShow: Movie[] = [];

  @HostListener('window:scroll', ['$event']) //escucha el evento scroll
  onScroll() {
    const pos =(document.documentElement.scrollTop || document.body.scrollTop)*1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    // console.log(pos, max);
    // console.log('scroll funcionando');
    if (pos > max) {
      
      this.peliculaServices.getPeliculas().subscribe((movie) => {
        this.movie.push(...movie);
        //console.log("this.movies",this.movie);
      });
    }
  }

  constructor(private peliculaServices: PeliculasService) {
    this.peliculaServices.getPeliculas().subscribe((resp) => {
      console.log('resp', resp);
      this.movieSildeShow = resp;
      this.movie = resp;
    });
  }
  ngOninit(): void {
    this.peliculaServices.getPeliculas().subscribe((movies) => {
      console.log('***', movies);
      this.movie = movies;
      this.movieSildeShow = movies;
    });
  }
  
  ngOnDestroy() {
     this.peliculaServices.resetPeliculaPage();//destruye el observable y vuelve a la pelicula 
  }
}
