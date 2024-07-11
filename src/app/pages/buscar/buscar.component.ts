import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent {
  texto: string = '';
  movies: Movie[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private peliculasServices: PeliculasService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
     // console.log(params['texto']);
      this.texto = params['texto'];
      this.peliculasServices.buscarPeliculas(this.texto).subscribe((movies) => {
        this.movies = movies;
       // console.log('movies', movies);
      });
    });
  }
}
