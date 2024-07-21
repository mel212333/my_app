import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/credits.interfaces';
import { MovieDetails } from 'src/app/interfaces/pelicula.interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent {
  //GET /movie/{movie:id}/credits
  pelicula?: MovieDetails;
 cast : Cast[] =[];
  constructor(
    private peliculasServices: PeliculasService,
    private activateRouter: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activateRouter.snapshot.params;
    this.peliculasServices.getPeliculasDetails(id).subscribe((movie) => {
      //copntrola si no hay pelicula
      if (!movie) {
        this.router.navigateByUrl('/'); //si la ruta directamente esta vacia se vuelve a Home
        return;
      }
      this.pelicula = movie;
    });
    this.peliculasServices.getCast(id).subscribe((cast) => {
      //copntrola si no hay pelicula
      if (!cast) {
        this.router.navigateByUrl('/'); //si la ruta directamente esta vacia se vuelve a Home
        return;
      }
      this.cast = cast;
    });
  }}