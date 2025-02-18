import { StaticImageData } from "next/image";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMainMovie {
  previewData: IMovie[];
  popularData: IMovie[];
  nowPlayingData: IMovie[];
  topRatedData: IMovie[];
}

export interface IPoster {
  randomMovieArray: IMovie[];
}

export interface IMovieFetch {
  movieData: IMovie[];
  trending ?: boolean ;
}

export interface IItem {
  id: number;
  path: string;
  notSelected: StaticImageData;
  Selected: StaticImageData;
  name: string;
}
export interface INavigatorItem {
  item: IItem;
  selected: boolean;
}

export interface IPlayButton{
    width ?: string
}
