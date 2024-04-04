import { APIGatewayProxyResult } from 'aws-lambda'
import { CreateInsurancePolicyService } from '../../../src/services/createInsurancePolicy.service'
import { handler } from '../../../src/functions/createInsurancePolicy'
import { eventMockCreateInsurancePolicy } from '../../mocks/functions/createInsurancePolicy.mock'
import { SUCCESSFUL_SAVE } from '../../../src/constants/app.constant'

describe('CreateInsurancePolicy.handler', () => {
  it('Should return a success message when registration has been successful', async () => {
    const mockCreate = jest.spyOn(CreateInsurancePolicyService.prototype, 'create')
    mockCreate.mockResolvedValue(SUCCESSFUL_SAVE)

    const response: APIGatewayProxyResult = await handler(eventMockCreateInsurancePolicy)

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(JSON.stringify({ message: SUCCESSFUL_SAVE }))
  })
})
