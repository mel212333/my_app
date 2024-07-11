import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, of } from 'rxjs';
import { Movie, PeliculasResponse } from '../interfaces/peliculas.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private serverURL: string = 'https://api.themoviedb.org/3';
  private peliculaPage = 1;
  cargando = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: 'a631c07636f7600913c8c6748fbbf3eb',
      language: 'es-ES',
      page: this.peliculaPage.toString(),
    };
  }
  getPeliculas(): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }
    this.cargando = true;
    return this.http
      .get<PeliculasResponse>(`${this.serverURL}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map((res) => res.results ?? []),
        tap(() => {
          this.peliculaPage += 1;
          this.cargando = false;
        })
      );
  }
  buscarPeliculas(texto: string): Observable<Movie[]> {
    const params = { ...this.params, page: 1, query: texto };
    return this.http
      .get<PeliculasResponse>(`${this.serverURL}/search/movie`, { params })
      .pipe(map((res) => res.results || []));
  }
  resetPeliculaPage() {
    this.peliculaPage = 1;
  }
}
