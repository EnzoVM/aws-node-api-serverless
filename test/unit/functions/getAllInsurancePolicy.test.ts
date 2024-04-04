import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { handler } from '../../../src/functions/getAllInsurancePolicies'
import { GetAllInsurancePoliciesService } from '../../../src/services/getAllInsurancePolicies.service'
import { getInsurancePolicyResponse, handleGetInsurancePolicyResponse } from '../../mocks/functions/getAllInsurancePolicy.mocks'

describe('CreateInsurancePolicy.handler', () => {
  it('Should return an array of insurance policies', async () => {
    const mockCreate = jest.spyOn(GetAllInsurancePoliciesService.prototype, 'get')
    mockCreate.mockResolvedValue(getInsurancePolicyResponse)

    const response: APIGatewayProxyResult = await handler({} as unknown as APIGatewayProxyEvent)

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(JSON.stringify(handleGetInsurancePolicyResponse))
  })
})
