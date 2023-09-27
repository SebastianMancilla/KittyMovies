import { Component, Input, OnInit } from '@angular/core';
import { Backdrop } from 'src/app/home/models/Posters.model';

@Component({
  selector: 'gallery-posters',
  templateUrl: './gallery-posters.component.html',
  styleUrls: ['./gallery-posters.component.css']
})
export class GalleryPostersComponent implements OnInit{
  @Input()
  dataPosters!: Backdrop[];

  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  }

}
