export class Weather {

    constructor( 
        public date: number,
        public icon: string,
        public description: string,
        public temperature: string,
        public tempFeelsLike: string,
        public windSpeed: string,
        public windDirection: string
        ) {}
}