
export class Movie {
    constructor(
        public page:number,
        public total_results: number,
        public total_pages : number,
        public results : Result[]
    ){}
}

export class Result {
    constructor(
        public vote_count:number,
        public id: number,
        public video : boolean,
        public vote_average : number,
        public title : string,
        public popularity : string,
        public poster_path : string,
        public original_language : string,
        public original_title : string,
        public genre_ids : number[],
        public backdrop_path : string,
        public adult : boolean,
        public overview : Text,
        public release_date : Date
    ){}
}