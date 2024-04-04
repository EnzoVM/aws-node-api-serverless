export const starWarsApiRepositoryMock = {
  getPlanet: jest.fn(),
  getPerson: jest.fn()
}

export const starWarsPlanetResponseMock = {
  name: 'Stewjon',
  rotation_period: 'unknown',
  orbital_period: 'unknown',
  diameter: '0',
  climate: 'temperate',
  gravity: '1 standard',
  terrain: 'grass',
  surface_water: 'unknown',
  population: 'unknown',
  residents: ['https://swapi.py4e.com/api/people/10/'],
  films: [],
  created: '2014-12-10T16:16:26.566000Z',
  edited: '2014-12-20T20:58:18.452000Z',
  enlace: 'https://swapi.py4e.com/api/planets/20/'
}

export const responseMock = {
  nombre: 'Stewjon',
  períodoDeRotación: 'unknown',
  períodoOrbital: 'unknown',
  diámetro: '0',
  clima: 'temperate',
  gravedad: '1 standard',
  terreno: 'grass',
  aguaSuperficial: 'unknown',
  población: 'unknown',
  residentes: ['https://swapi.py4e.com/api/people/10/'],
  películas: [],
  creado: '2014-12-10T16:16:26.566000Z',
  editado: '2014-12-20T20:58:18.452000Z',
  enlace: 'https://swapi.py4e.com/api/planets/20/'
}

export const starWarsPlanetIdMock = '29'
