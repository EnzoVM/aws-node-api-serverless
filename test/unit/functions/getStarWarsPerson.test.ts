import { APIGatewayProxyResult } from 'aws-lambda'
import { handler } from '../../../src/functions/getStarWarsPerson'
import { eventMockGetStarWarsPerson, getStarWarsPersonResponseMock, handlePersonResponse } from '../../mocks/functions/getStarWarsPerson.mock'
import { GetStarWarsPersonService } from '../../../src/services/getStarWarsPerson.service'

describe('GetStarWarsPerson.handler', () => {
  it('Should return a star wars person', async () => {
    const mockCreate = jest.spyOn(GetStarWarsPersonService.prototype, 'get')
    mockCreate.mockResolvedValue(getStarWarsPersonResponseMock)

    const response: APIGatewayProxyResult = await handler(eventMockGetStarWarsPerson)

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(JSON.stringify(handlePersonResponse))
  })
})
