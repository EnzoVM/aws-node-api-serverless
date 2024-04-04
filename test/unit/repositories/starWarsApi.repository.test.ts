import axios from 'axios'
import { StarWarsApiRepository } from '../../../src/repositories/starWarsApi.repository'
import { planetFoundMock, peopleFoundMock, starWarsIdMock } from '../../mocks/repositories/starWarsApi.repository.mock'

jest.mock('axios')

describe('StarWarsApiRepository', () => {
  let starWarsApiRepository: StarWarsApiRepository

  beforeEach(() => {
    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn()
    })

    starWarsApiRepository = new StarWarsApiRepository()
  })

  describe('getPlanet', () => {
    it('should return planet data', async () => {
      (starWarsApiRepository as any).axios.get.mockResolvedValue({ data: planetFoundMock })

      const response = await starWarsApiRepository.getPlanet(starWarsIdMock)

      expect(response).toEqual(planetFoundMock)
    })

    it('should throw an error when request fails', async () => {
      (axios.get as jest.Mock).mockRejectedValue(new Error('Request failed'))

      await expect(starWarsApiRepository.getPlanet(starWarsIdMock)).rejects.toBeInstanceOf(Error)
    })
  })

  describe('getPerson', () => {
    it('should return person data', async () => {
      (starWarsApiRepository as any).axios.get.mockResolvedValue({ data: peopleFoundMock })

      const response = await starWarsApiRepository.getPerson(starWarsIdMock)

      expect(response).toEqual(peopleFoundMock)
    })

    it('should throw an error when request fails', async () => {
      (axios.get as jest.Mock).mockRejectedValue(new Error('Request failed'))

      await expect(starWarsApiRepository.getPerson(starWarsIdMock)).rejects.toBeInstanceOf(Error)
    })
  })
})
