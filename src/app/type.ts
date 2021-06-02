export interface Poll{
    id:number; // 12
    question:string; // which day of work you like most?
    results:number[]; // [0, 0, 0, 0, 5, 2]
    options:string[]; // ['Monday', 'Tuesday', 'Wendsday']
    thumbnails:string; // url
}


export interface Voter{
    id:number;
    voted:number[];
}
