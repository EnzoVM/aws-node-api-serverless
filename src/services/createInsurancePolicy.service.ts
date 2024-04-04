import { DynamoDBInterface } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'
import { CreateInsurancePolicyRequest } from '../requests'
import { SUCCESSFUL_SAVE } from '../constants/app.constant'

export class CreateInsurancePolicyService {
  constructor (
    private readonly dynamoDBRepository: DynamoDBInterface
  ) {}

  async create (data: CreateInsurancePolicyRequest): Promise<string> {
    await this.dynamoDBRepository.create(uuidv4(), data)
    return SUCCESSFUL_SAVE
  }
}
