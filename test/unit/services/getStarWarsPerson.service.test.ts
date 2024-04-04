/* eslint-disable @typescript-eslint/unbound-method */
import { GetStarWarsPersonService } from '../../../src/services/getStarWarsPerson.service'
import { starWarsApiRepositoryMock, starWarsResponseMock, responseMock, starWarsPeopleIdMock } from '../../mocks/services/getStarWarsPeople.service.mock'

const getStarWarsPersonService = new GetStarWarsPersonService(starWarsApiRepositoryMock)

describe('GetStarWarsPersonService', () => {
  test('GetStarWarsPersonService class should exist', () => {
    expect(GetStarWarsPersonService).toBeDefined()
    expect(GetStarWarsPersonService).toBeInstanceOf(Function)
  })

  test('Get function should exist', () => {
    expect(getStarWarsPersonService).toBeInstanceOf(GetStarWarsPersonService)
    expect(getStarWarsPersonService.get).toBeDefined()
    expect(getStarWarsPersonService.get).toBeInstanceOf(Function)
  })

  test('Should return a person object', async () => {
    starWarsApiRepositoryMock.getPerson.mockResolvedValue(starWarsResponseMock)
    const result = await getStarWarsPersonService.get(starWarsPeopleIdMock)
    expect(result).toStrictEqual(responseMock)
  })
})
