import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrimeMaterialModule } from '../prime-material/prime-material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { FillImagePipe } from './pipes/fill-image.pipe';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { DialogService } from 'primeng/dynamicdialog';
import { VideoCardComponent } from './pages/movie-page/components/video-card/video-card.component';
import { HeaderMovieComponent } from './pages/movie-page/components/header-movie/header-movie.component';
import { CastSliderComponent } from './pages/movie-page/components/cast-slider/cast-slider.component';
import { CardCastComponent } from './pages/movie-page/components/card-cast/card-cast.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { VideoGalleryComponent } from './pages/movie-page/components/video-gallery/video-gallery.component';
import { PostersTabsComponent } from './pages/movie-page/components/posters-tabs/posters-tabs.component';
import { GalleryPostersComponent } from './pages/movie-page/components/gallery-posters/gallery-posters.component';
import { MovieCarouselComponent } from './components/movie-carousel/movie-carousel.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';


@NgModule({
  providers: [DialogService],
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    SideNavComponent,
    CardMovieComponent,
    FillImagePipe,
    MoviePageComponent,
    HeaderMovieComponent,
    VideoCardComponent,
    CastSliderComponent,
    CardCastComponent,
    SafeUrlPipe,
    VideoGalleryComponent,
    PostersTabsComponent,
    GalleryPostersComponent,
    MovieCarouselComponent,
    SearchDialogComponent,
    SearchResultsPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    PrimeMaterialModule
  ]
})
export class HomeModule { }
