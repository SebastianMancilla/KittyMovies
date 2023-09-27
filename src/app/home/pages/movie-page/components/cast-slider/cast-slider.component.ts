import { Component, Input, OnInit } from '@angular/core';
import { Cast } from '../../../../models/Cast.model';
import { MoviesService } from 'src/app/home/service/movies.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.css']
})
export class CastSliderComponent implements OnInit {

  cast!: Cast[];

  responsiveOptions: any[] | undefined;

  constructor(
    private movieService: MoviesService,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.movieService.getCastByMovieId(id))
    ).subscribe( cast => this.cast = cast)
    // this.movieService.getCastByMovieId(this.id).subscribe(cast => this.cast = cast);
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 2
      }
    ];
  }
}
