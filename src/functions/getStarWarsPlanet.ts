import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { GetStarWarsPlanetService } from '../services/getStarWarsPlanet.service'
import { StarWarsApiRepository } from '../repositories/starWarsApi.repository'
import { PLANET_FOUND_SUCCESSFULLY } from '../constants/app.constant'

const getStarWarsPlanetService = new GetStarWarsPlanetService(new StarWarsApiRepository())

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id ?? ''
  const planetFound = await getStarWarsPlanetService.get(id)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: PLANET_FOUND_SUCCESSFULLY,
      data: planetFound
    })
  }
}
