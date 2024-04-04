import { StarWarsPeopleApiResponse, StarWarsPlanetsApiResponse } from '../responses'

export interface StarWarsApiInterface {
  getPlanet: (id: string) => Promise<StarWarsPlanetsApiResponse>
  getPerson: (id: string) => Promise<StarWarsPeopleApiResponse>
}
