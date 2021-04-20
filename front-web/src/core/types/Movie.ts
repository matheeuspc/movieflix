
export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subtitle: string; 
    year: number;
    imgUrl: string;
    synopsis: string;
    genreId: number;
    reviews: Review[];
}

export type Review = {
    id: number;
    text: string;
    user: User;
}

export type User = {
    id: number;
    name: string;
    email: string;
}