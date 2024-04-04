import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBRepository } from '../repositories/dynamoDB.repository'
import { GetAllInsurancePoliciesService } from '../services/getAllInsurancePolicies.service'
import { GET_ALL_INSURANCE_POLICY } from '../constants/app.constant'

const getAllInsurancePoliciesService = new GetAllInsurancePoliciesService(new DynamoDBRepository())

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const response = await getAllInsurancePoliciesService.get()
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: GET_ALL_INSURANCE_POLICY,
      data: response
    })
  }
}
