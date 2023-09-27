import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movies.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../service/movies.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {
  movies!: Movie[];


  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({term}) => this.moviesService.searchMovieByTerm(term))
    ).subscribe( movies => this.movies = movies);
  }

}
