export interface BackdropResp {
  backdrops: Backdrop[];
  id:        number;
  logos:     Backdrop[];
  posters:   Backdrop[];
}

export interface Backdrop {
  aspect_ratio: number;
  height:       number;
  iso_639_1:    string | null;
  file_path:    string;
  vote_average: number;
  vote_count:   number;
  width:        number;
}
