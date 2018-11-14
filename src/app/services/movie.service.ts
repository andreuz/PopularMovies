import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../classes/movie';
import { PageResults } from '../classes/page-results';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = 'e212cd050b8170cc45a66e58dd6fec0f';
  private languajeExternal = '?api_key=' + this.apiKey + '&language=en-US&external_source=imdb_id';

  constructor(private http: HttpClient) { }

  loadMovie(idMovie: number): Observable<Movie> {
    const urlMovie = this.url + idMovie + this.languajeExternal;
    return this.http.get<Movie>(urlMovie);
  }

  getMovies(): Observable<PageResults> {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?language=en-US&api_key=e212cd050b8170cc45a66e58dd6fec0f';
    return this.http.get<PageResults>(url);
  }
}