import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interfaces';
//import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css'],
})
export class PeliculasPosterGridComponent {
  @Input() movies?: Movie[];

  constructor(
    //private config: NgbRatingConfig,
    private router: Router
  ) {
    // customize default values of ratings used by this component tree
    // config.max = 10;
    // config.readonly = true;
  }

  ngOnInit() {
    console.log(this.movies);
  }

  onMovieClick(movie: Movie) {
    this.router.navigate(['/pelicula', movie.id]);
    console.log('---', movie);
  }
}
