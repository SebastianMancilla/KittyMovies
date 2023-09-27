import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { lastValueFrom, switchMap } from 'rxjs';
import { MoviesService } from 'src/app/home/service/movies.service';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  styles: [
  ]
})
export class VideoCardComponent implements OnInit {

  movieId!: number;
  trailer!: string;

  videoUrl: string = environment.YT_URL;

  constructor(
    private activatedRoute:ActivatedRoute,
    private moviesService: MoviesService,
    public dialogConfig: DynamicDialogConfig,
    public dialogRef: DynamicDialogRef
  ) { }

   ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.moviesService.getKeyTrailerByMovieId(id))
    ).subscribe( keyMovie => this.trailer = keyMovie)

  }




}
