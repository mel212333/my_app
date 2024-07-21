import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { SharedModule } from '../shared/shared.module';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculasPosterGridComponent,
  ],
  imports: [CommonModule, SharedModule, PipesModule],
  exports: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculasPosterGridComponent,
  ],
})
export class PagesModule {}
