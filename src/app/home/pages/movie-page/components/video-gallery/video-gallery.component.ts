import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trailer } from 'src/app/home/models/MovieTrailer.model';
import { MoviesService } from 'src/app/home/service/movies.service';
import { environment } from 'src/environments/environment.development';
import { switchMap } from 'rxjs';

@Component({
  selector: 'video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {


  videos!: Trailer[];

  videoUrl: string= environment.YT_URL;

  constructor(
    private movieService: MoviesService,
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.movieService.getVideosByMovieId(id))
    ).subscribe(videos => this.videos = videos)
  }


}
