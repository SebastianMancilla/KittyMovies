import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Backdrop, BackdropResp } from 'src/app/home/models/Posters.model';
import { MoviesService } from '../../../../service/movies.service';

@Component({
  selector: 'posters-tabs',
  templateUrl: './posters-tabs.component.html',
  styleUrls: ['./posters-tabs.component.css']
})
export class PostersTabsComponent implements OnInit {

  posters!: BackdropResp;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
  ){}
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.moviesService.getImagesByMovieId(id))
    ).subscribe( resp => this.posters = resp)

  }



}
