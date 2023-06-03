export type BeerType = {
    id: number,
    name: string,
    tagline: string,
    description: string,
    image_url: string,
    abv: number,
    food_pairing: [
        string,
        string,
        string
    ],
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface BeerSliceState {
    beers: BeerType[]
    status: Status,
}