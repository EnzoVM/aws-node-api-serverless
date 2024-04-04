import { APIGatewayProxyEvent } from 'aws-lambda'
import { PERSON_FOUND_SUCCESSFULLY } from '../../../src/constants/app.constant'

export const eventMockGetStarWarsPerson: APIGatewayProxyEvent = {
  pathParameters: {
    id: '20'
  }
} as any

export const getStarWarsPersonResponseMock = {
  nombre: 'Luke Skywalker',
  altura: '172',
  peso: '77',
  masa: '50',
  colorDeCabello: 'blond',
  colorDePiel: 'fair',
  colorDeOjos: 'blue',
  añoDeNacimiento: '19BBY',
  género: 'male',
  planetaNatal: 'https://swapi.py4e.com/api/planets/1/',
  películas: [
    'https://swapi.py4e.com/api/films/1/',
    'https://swapi.py4e.com/api/films/2/',
    'https://swapi.py4e.com/api/films/3/',
    'https://swapi.py4e.com/api/films/6/',
    'https://swapi.py4e.com/api/films/7/'
  ],
  especies: [
    'https://swapi.py4e.com/api/species/1/'
  ],
  vehículos: [
    'https://swapi.py4e.com/api/vehicles/14/',
    'https://swapi.py4e.com/api/vehicles/30/'
  ],
  navesEstelares: [
    'https://swapi.py4e.com/api/starships/12/',
    'https://swapi.py4e.com/api/starships/22/'
  ],
  creado: '2014-12-09T13:50:51.644000Z',
  editado: '2014-12-20T21:17:56.891000Z',
  enlace: 'https://swapi.py4e.com/api/people/1/'
}

export const handlePersonResponse = {
  message: PERSON_FOUND_SUCCESSFULLY,
  data: getStarWarsPersonResponseMock
}
