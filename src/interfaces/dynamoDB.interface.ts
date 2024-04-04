import { CreateInsurancePolicyRequest } from '../requests'
import { CreateInsurancePolicyResponse } from '../responses'

export interface DynamoDBInterface {
  create: (id: string, data: CreateInsurancePolicyRequest) => Promise<void>
  getAll: () => Promise<CreateInsurancePolicyResponse[]>
}
