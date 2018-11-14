import { Movie } from '../classes/movie';

/**
 * @class PageResult
 * Clase que obtiene una pagina de resultados de las peliculas mas valoradas consultadas por el servicio.
 */
export class PageResults {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[]
}