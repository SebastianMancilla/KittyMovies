import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { Movie } from 'src/app/home/models/Movies.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies!: Movie[];
  upcomingMovies!: Movie[];
  constructor(
    private movieService: MoviesService,
  ) { }
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
    this.movieService.getUpcomingMovies().subscribe(movies => this.upcomingMovies = movies);

  }





}
