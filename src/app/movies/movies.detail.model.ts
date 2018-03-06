export class MovieDetail {
    constructor(
        public adult : boolean,
        public backdrop_path : string,

        public belongs_to_collection : any,
        public budget : number,

        public genres : any[],
        public homepage : string,
        public id: number,
        public imdb_id: number,
        public original_language: string,
        public original_title : string,
        public overview : Text,
        public popularity : string,
        public poster_path : string,

        public production_companies : any[],

        public production_countries: any[],
        public release_date : Date,
        public revenue : string,
        public runtime : number,

        public spoken_languages: any[],
        public status: string,
        public tagline: string,
        public title : string,  
        public video : boolean,
        public vote_average : number,
        public vote_count:number        
                                                            
    ){}
}