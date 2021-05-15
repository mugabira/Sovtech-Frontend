import { Joke } from "./Joke";
import { Person } from "./People";

export interface Search{
    jokeSearchResponse: JokeSearchResponse
    peopleSearchResponse: PeopleSearchResponse

}
export interface JokeSearchResponse{
    total: number
    result: Joke[]
}
export interface PeopleSearchResponse{
    count: number
    next: string
    previous: string
    result: Person[]
}