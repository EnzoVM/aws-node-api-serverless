import { StarWarsApiInterface } from '../interfaces'
import { StarWarsPlanetsApiResponse, StarWarsPeopleApiResponse } from '../responses'
import axios, { AxiosInstance } from 'axios'
import { TIMEOUT_APIS, SWAPI_ROUTES, SWAPI_BASE_URL } from '../constants/app.constant'

export class StarWarsApiRepository implements StarWarsApiInterface {
  private readonly axios: AxiosInstance

  constructor () {
    this.axios = axios.create({
      baseURL: SWAPI_BASE_URL,
      timeout: TIMEOUT_APIS,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async getPlanet (id: string): Promise<StarWarsPlanetsApiResponse> {
    try {
      const { data } = await this.axios.get<StarWarsPlanetsApiResponse>(SWAPI_ROUTES.planets + id)
      return data
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getPerson (id: string): Promise<StarWarsPeopleApiResponse> {
    try {
      const { data } = await this.axios.get<StarWarsPeopleApiResponse>(SWAPI_ROUTES.people + id)
      return data
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
