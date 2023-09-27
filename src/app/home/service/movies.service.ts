import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, pipe, tap } from 'rxjs';
import { Movie, MovieResp } from 'src/app/home/models/Movies.model';
import { environment } from 'src/environments/environment.development';
import { MovieInfo } from '../models/MovieInfo.model';
import { Cast, CastResp } from '../models/Cast.model';
import { Trailer, TrailerResp } from '../models/MovieTrailer.model';
import { Backdrop, BackdropResp } from '../models/Posters.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${environment.API_KEY}`,
  });
  private base_url = environment.BASE_URL;

  constructor(
    private http: HttpClient
  ) { }


  getMovies(): Observable<Movie[]> {

    return this.http.get<MovieResp>(`${this.base_url}/discover/movie`, { headers: this.headers })
      .pipe(
        map(resp => resp.results)
      )
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<MovieResp>(`${this.base_url}/movie/upcoming`, { headers: this.headers })
      .pipe(
        map(resp => resp.results)
      )
  }


  getMovieById(id: string): Observable<MovieInfo | undefined> {
    return this.http.get<MovieInfo>(`${this.base_url}/movie/${id}`, { headers: this.headers })
      .pipe(
        catchError(err => of(undefined))
      )
  }

  getCastByMovieId(id: number): Observable<Cast[]> {
    return this.http.get<CastResp>(`${this.base_url}/movie/${id}/credits`, { headers: this.headers })
      .pipe(
        map(resp => resp.cast)
      )
  }

  getKeyTrailerByMovieId(id: number): Observable<string> {
    return this.http.get<TrailerResp>(`${this.base_url}/movie/${id}/videos`, { headers: this.headers })
      .pipe(
        map(resp => resp.results[0].key),
        tap(resp => console.log(resp))
      )
  }

  getVideosByMovieId(id: number): Observable<Trailer[]> {
    return this.http.get<TrailerResp>(`${this.base_url}/movie/${id}/videos`, { headers: this.headers })
      .pipe(
        map(resp => resp.results)
      )
  }

  getImagesByMovieId(id: number): Observable<BackdropResp> {
    return this.http.get<BackdropResp>(`${this.base_url}/movie/${id}/images`, { headers: this.headers })
      .pipe(
        tap(resp => console.log(resp))
      )
  }

  searchMovieByTerm(term: string): Observable<Movie[]> {
    return this.http.get<MovieResp>(`${this.base_url}/search/movie`, {
      headers: this.headers,
      params: {
        query: term
      }
    }).pipe(
      map(resp => resp.results),
      tap(resp => console.log(resp))
    )
  }


}
