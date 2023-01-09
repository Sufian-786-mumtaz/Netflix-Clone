export interface Genre {
    name: string;
    id: null;
};

export interface Movie {
    adult:boolean;
    backdrop_path:string;
    genre_ids:number[];
    media_type?: string
    id:number;
    original_language:string;
    original_title:string;
    overview:string;
    popularity:number;
    poster_path:string;
    release_date:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
}
export interface Element {
    type:
      | 'Bloopers'
      | 'Featurette'
      | 'Behind the Scenes'
      | 'Clip'
      | 'Trailer'
      | 'Teaser'
  }