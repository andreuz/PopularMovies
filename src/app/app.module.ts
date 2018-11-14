import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieService } from './services/movie.service';
import { MoviesComponent } from './components/movies/movies.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, NgbModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, HeaderComponent, MovieDetailComponent, MoviesComponent],
  bootstrap: [AppComponent],
  providers: [MovieService]
})
export class AppModule { }
