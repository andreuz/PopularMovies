import { Component, OnInit } from '@angular/core';
import { PageResults } from '../../classes/page-results';
import { MovieService } from '../../services/movie.service';

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

  ngOnInit() {
  }

  get list() {
    return this.pageResults;
  }

  loadList() {
    this.movieService.getMovies()
      .subscribe(pageResults => this.pageResults = pageResults);
    localStorage.setItem("movies", JSON.stringify(this.pageResults));
  }
}
