import { APIGatewayProxyResult } from 'aws-lambda'
import { handler } from '../../../src/functions/getStarWarsPlanet'
import { GetStarWarsPlanetService } from '../../../src/services/getStarWarsPlanet.service'
import { eventMockGetStarWarsPlanet, getStarWarsPlanerResponseMock, handlePlanetResponse } from '../../mocks/functions/getStarWarsPlanet.test.mock'

describe('GetStarWarsPlanet.handler', () => {
  it('Should return a star wars planet', async () => {
    const mockCreate = jest.spyOn(GetStarWarsPlanetService.prototype, 'get')
    mockCreate.mockResolvedValue(getStarWarsPlanerResponseMock)

    const response: APIGatewayProxyResult = await handler(eventMockGetStarWarsPlanet)

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(JSON.stringify(handlePlanetResponse))
  })
})
