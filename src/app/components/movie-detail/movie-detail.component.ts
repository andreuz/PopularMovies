import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../classes/movie';
/**
 * @class MovieDetailComponent
 * Componente detalle de cada una de las peliculas mas populares.
 */
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.getMovie();
  }

  /**
   * @method getMovies
   * obtiene el detalle de una pelicula por medio del id.
   */
  getMovie() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.loadMovie(id)
      .subscribe(movie => this.movie = movie);
  }
}