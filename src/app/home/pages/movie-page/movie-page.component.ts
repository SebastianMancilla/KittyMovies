import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../service/movies.service';
import { switchMap } from 'rxjs';
import { MovieInfo } from '../../models/MovieInfo.model';
import { BackdropResp } from '../../models/Posters.model';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit{
  public movie!:MovieInfo;
  public posters!: BackdropResp;

  constructor(
    private moviesService:MoviesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap(({id} )=> this.moviesService.getMovieById(id)),
      ).subscribe( movie =>{
        if(!movie) return this.router.navigate(['/movies'])

        this.movie = movie;

        return;
      });

      this.activateRoute.params.pipe(
        switchMap(({id}) => this.moviesService.getImagesByMovieId(id))
      ).subscribe( posters => this.posters = posters)
  }


}
