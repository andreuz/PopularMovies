import { Component, OnInit } from '@angular/core';
import { PageResults } from '../../classes/page-results';
import { MovieService } from '../../services/movie.service';
/**
 * @class MoviesComponent
 * Componente que muestra todas las peliculas que llegan en la consulta realizada.
 */
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  pageResults: PageResults;

  constructor(private movieService: MovieService) {
    this.loadList();
  }

  /**
   * @method get list
   * Funcion encargada de retornar la lista de peliculas.
   */
  get list() {
    return this.pageResults;
  }

  /**
   * @method loadList
   * Funcion que hace la carga de peliculas por medio del servicio
   */
  loadList() {
    this.movieService.getMovies()
      .subscribe(pageResults => this.pageResults = pageResults);
  }
}
