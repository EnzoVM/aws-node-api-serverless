import { INSURANCE_POLICIES_NOT_FOUND } from '../constants/app.constant'
import { DynamoDBInterface } from '../interfaces'
import { CreateInsurancePolicyResponse } from '../responses'

export class GetAllInsurancePoliciesService {
  constructor (
    private readonly dynamoDBRepository: DynamoDBInterface
  ) {}

  async get (): Promise<CreateInsurancePolicyResponse[]> {
    const response = await this.dynamoDBRepository.getAll()

    if (response.length === 0) {
      throw new Error(INSURANCE_POLICIES_NOT_FOUND)
    }

    return response
  }
}
