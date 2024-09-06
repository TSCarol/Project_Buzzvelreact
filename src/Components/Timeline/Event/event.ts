export interface YearRange {
    start: number;
    end?: number; 
}

export interface Event {
    year: number | YearRange;
    title: string;
    descriptionOne: string;
    descriptionTwo: string;
    descriptionThree: string;
}