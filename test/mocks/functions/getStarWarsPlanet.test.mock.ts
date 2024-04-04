import { APIGatewayProxyEvent } from 'aws-lambda'
import { PLANET_FOUND_SUCCESSFULLY } from '../../../src/constants/app.constant'

export const eventMockGetStarWarsPlanet: APIGatewayProxyEvent = {
  pathParameters: {
    id: '20'
  }
} as any

export const getStarWarsPlanerResponseMock = {
  nombre: 'Stewjon',
  períodoDeRotación: 'unknown',
  períodoOrbital: 'unknown',
  diámetro: '0',
  clima: 'temperate',
  gravedad: '1 standard',
  terreno: 'grass',
  aguaSuperficial: 'unknown',
  población: 'unknown',
  residentes: [
    'https://swapi.py4e.com/api/people/10/'
  ],
  películas: [],
  creado: '2014-12-10T16:16:26.566000Z',
  editado: '2014-12-20T20:58:18.452000Z',
  enlace: 'https://swapi.py4e.com/api/planets/20/'
}

export const handlePlanetResponse = {
  message: PLANET_FOUND_SUCCESSFULLY,
  data: getStarWarsPlanerResponseMock
}
