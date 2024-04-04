export const starWarsApiRepositoryMock = {
  getPlanet: jest.fn(),
  getPerson: jest.fn()
}

export const starWarsResponseMock = {
  name: 'Yoda',
  height: '66',
  mass: '17',
  hair_color: 'white',
  skin_color: 'green',
  eye_color: 'brown',
  birth_year: '896BBY',
  gender: 'male',
  homeworld: 'https://swapi.py4e.com/api/planets/28/',
  films: [
    'https://swapi.py4e.com/api/films/2/',
    'https://swapi.py4e.com/api/films/3/',
    'https://swapi.py4e.com/api/films/4/',
    'https://swapi.py4e.com/api/films/5/',
    'https://swapi.py4e.com/api/films/6/'
  ],
  species: ['https://swapi.py4e.com/api/species/6/'],
  vehicles: [],
  starships: [],
  created: '2014-12-15T12:26:01.042000Z',
  edited: '2014-12-20T21:17:50.345000Z',
  url: 'https://swapi.py4e.com/api/people/20/'
}

export const responseMock = {
  nombre: 'Yoda',
  altura: '66',
  peso: '17',
  colorDeCabello: 'white',
  colorDePiel: 'green',
  colorDeOjos: 'brown',
  añoDeNacimiento: '896BBY',
  género: 'male',
  planetaNatal: 'https://swapi.py4e.com/api/planets/28/',
  películas: [
    'https://swapi.py4e.com/api/films/2/',
    'https://swapi.py4e.com/api/films/3/',
    'https://swapi.py4e.com/api/films/4/',
    'https://swapi.py4e.com/api/films/5/',
    'https://swapi.py4e.com/api/films/6/'
  ],
  especies: ['https://swapi.py4e.com/api/species/6/'],
  vehículos: [],
  navesEstelares: [],
  creado: '2014-12-15T12:26:01.042000Z',
  editado: '2014-12-20T21:17:50.345000Z',
  enlace: 'https://swapi.py4e.com/api/people/20/'
}

export const starWarsPeopleIdMock = '20'
