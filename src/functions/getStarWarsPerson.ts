import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { GetStarWarsPersonService } from '../services/getStarWarsPerson.service'
import { StarWarsApiRepository } from '../repositories/starWarsApi.repository'
import { PERSON_FOUND_SUCCESSFULLY } from '../constants/app.constant'

const getStarWarsPersonService = new GetStarWarsPersonService(new StarWarsApiRepository())

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id ?? ''
  const personFound = await getStarWarsPersonService.get(id)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: PERSON_FOUND_SUCCESSFULLY,
      data: personFound
    })
  }
}
