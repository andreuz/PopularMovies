/**
 * @class Movie
 * Clase que abstrae la información de cada una de las peliculas populares.
 */
export class Movie {
    public vote_count: number;
    public id: number;
    public video: boolean;
    public vote_average: number;
    public title: string;
    public popularity: number;
    public poster_path: string;
    public original_language: string;
    public original_title: string;
    public genre_ids: number[];
    public backdrop_path: string;
    public adult: boolean;
    public overview: string;
    public release_date: string;
}