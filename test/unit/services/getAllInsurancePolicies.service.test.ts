/* eslint-disable @typescript-eslint/unbound-method */
import { GetAllInsurancePoliciesService } from '../../../src/services/getAllInsurancePolicies.service'
import { dynamoDBRepositoryMock, responseMock } from '../../mocks/services/getAllInsurancePolicy.service.mock'

const getAllInsurancePoliciesService = new GetAllInsurancePoliciesService(dynamoDBRepositoryMock)

describe('GetAllInsurancePoliciesService', () => {
  test('GetAllInsurancePoliciesService class should exist', () => {
    expect(GetAllInsurancePoliciesService).toBeDefined()
    expect(GetAllInsurancePoliciesService).toBeInstanceOf(Function)
  })

  test('Get function should exist', () => {
    expect(getAllInsurancePoliciesService).toBeInstanceOf(GetAllInsurancePoliciesService)
    expect(getAllInsurancePoliciesService.get).toBeDefined()
    expect(getAllInsurancePoliciesService.get).toBeInstanceOf(Function)
  })

  test('Should return a array of insurance policy objects', async () => {
    dynamoDBRepositoryMock.getAll.mockResolvedValue(responseMock)
    const result = await getAllInsurancePoliciesService.get()
    expect(result).toStrictEqual(responseMock)
  })

  test('Should return an error when empty array', async () => {
    dynamoDBRepositoryMock.getAll.mockResolvedValue([])
    await expect(getAllInsurancePoliciesService.get()).rejects.toBeInstanceOf(Error)
  })
})
