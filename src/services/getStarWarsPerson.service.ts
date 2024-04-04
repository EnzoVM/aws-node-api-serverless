import { StarWarsApiInterface } from '../interfaces'
import { translateToSpanishMapper } from '../mappers/translateToSpanish.mapper'
import { GetStarWarsPeopleResponse } from '../responses'

export class GetStarWarsPersonService {
  constructor (
    private readonly starWarsApiRepository: StarWarsApiInterface
  ) {}

  async get (id: string): Promise<GetStarWarsPeopleResponse> {
    const personFound = await this.starWarsApiRepository.getPerson(id)
    const translatedPerson = translateToSpanishMapper(personFound)
    return translatedPerson as unknown as GetStarWarsPeopleResponse
  }
}
