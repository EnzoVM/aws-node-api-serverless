/* eslint-disable @typescript-eslint/unbound-method */
import { SUCCESSFUL_SAVE } from '../../../src/constants/app.constant'
import { CreateInsurancePolicyService } from '../../../src/services/createInsurancePolicy.service'
import { dynamoDBRepositoryMock, dataParameterMock } from '../../mocks/services/createInsurancePolicy.service.mock'

const createInsurancePolicyService = new CreateInsurancePolicyService(dynamoDBRepositoryMock)

describe('CreateInsurancePolicyService', () => {
  test('CreateInsurancePolicyService class should exist', () => {
    expect(CreateInsurancePolicyService).toBeDefined()
    expect(CreateInsurancePolicyService).toBeInstanceOf(Function)
  })

  test('Create function should exist', () => {
    expect(createInsurancePolicyService).toBeInstanceOf(CreateInsurancePolicyService)
    expect(createInsurancePolicyService.create).toBeDefined()
    expect(createInsurancePolicyService.create).toBeInstanceOf(Function)
  })

  test('Should return a message', async () => {
    const result = await createInsurancePolicyService.create(dataParameterMock)

    expect(result).toEqual(SUCCESSFUL_SAVE)
  })
})
