/* eslint-disable @typescript-eslint/unbound-method */
import { GetStarWarsPlanetService } from '../../../src/services/getStarWarsPlanet.service'
import { starWarsApiRepositoryMock, starWarsPlanetResponseMock, responseMock, starWarsPlanetIdMock } from '../../mocks/services/getStarWarsPlanet.service.mock'

const getStarWarsPlanetService = new GetStarWarsPlanetService(starWarsApiRepositoryMock)

describe('GetStarWarsPlanetService', () => {
  test('GetStarWarsPlanetService class should exist', () => {
    expect(GetStarWarsPlanetService).toBeDefined()
    expect(GetStarWarsPlanetService).toBeInstanceOf(Function)
  })

  test('Get function should exist', () => {
    expect(getStarWarsPlanetService).toBeInstanceOf(GetStarWarsPlanetService)
    expect(getStarWarsPlanetService.get).toBeDefined()
    expect(getStarWarsPlanetService.get).toBeInstanceOf(Function)
  })

  test('Should return a person object', async () => {
    starWarsApiRepositoryMock.getPlanet.mockResolvedValue(starWarsPlanetResponseMock)
    const result = await getStarWarsPlanetService.get(starWarsPlanetIdMock)
    expect(result).toStrictEqual(responseMock)
  })
})
