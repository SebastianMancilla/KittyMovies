import { Component, Input, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MovieInfo } from 'src/app/home/models/MovieInfo.model';
import { VideoCardComponent } from '../video-card/video-card.component';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/home/service/movies.service';
import { map, Observable, pipe } from 'rxjs';

@Component({
  selector: 'header-movie',
  templateUrl: './header-movie.component.html',
  styleUrls: ['./header-movie.component.css']
})
export class HeaderMovieComponent implements OnDestroy {
  @Input()
   movie!: MovieInfo;

  ref!: DynamicDialogRef;

  constructor(
    private router: Router,
    public dialogService: DialogService
    ) { }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
  }
  }

  show() {
    this.ref = this.dialogService.open(VideoCardComponent, {
      header: 'Select a Product',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data:{
        id: this.movie.id
      }
    });
  }

  goBack(): void{
    this.router.navigateByUrl('/movies')
  }


}
