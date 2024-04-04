import { StarWarsApiInterface } from '../interfaces'
import { translateToSpanishMapper } from '../mappers/translateToSpanish.mapper'
import { GetStarWarsPlanetsResponse } from '../responses'

export class GetStarWarsPlanetService {
  constructor (
    private readonly starWarsApiRepository: StarWarsApiInterface
  ) {}

  async get (id: string): Promise<GetStarWarsPlanetsResponse> {
    const planetFound = await this.starWarsApiRepository.getPlanet(id)
    const translatedPlanet = translateToSpanishMapper(planetFound)
    return translatedPlanet as unknown as GetStarWarsPlanetsResponse
  }
}
