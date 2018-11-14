import { Movie } from '../classes/movie';

export class PageResults {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[]
}