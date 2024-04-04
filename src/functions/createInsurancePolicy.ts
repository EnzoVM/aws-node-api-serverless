import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { CreateInsurancePolicyService } from '../services/createInsurancePolicy.service'
import { DynamoDBRepository } from '../repositories/dynamoDB.repository'
import { CreateInsurancePolicyRequest } from '../requests'

const createInsurancePolicyService = new CreateInsurancePolicyService(new DynamoDBRepository())

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body: CreateInsurancePolicyRequest = JSON.parse(event.body ?? '')
  const message = await createInsurancePolicyService.create(body)
  return {
    statusCode: 200,
    body: JSON.stringify({ message })
  }
}
