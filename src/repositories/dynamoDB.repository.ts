import { DYNAMO_TABLE_NAME } from '../constants/env.constant'
import { DynamoDBInterface } from '../interfaces/dynamoDB.interface'
import { CreateInsurancePolicyRequest } from '../requests'
import { CreateInsurancePolicyResponse } from '../responses'
import { PutItemCommand, ScanCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb'

export class DynamoDBRepository implements DynamoDBInterface {
  private readonly client: DynamoDBClient

  constructor () {
    this.client = new DynamoDBClient({})
  }

  async create (id: string, data: CreateInsurancePolicyRequest): Promise<void> {
    try {
      const params = {
        TableName: DYNAMO_TABLE_NAME,
        Item: marshall({ id, ...data })
      }

      await this.client.send(new PutItemCommand(params))
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async getAll (): Promise<CreateInsurancePolicyResponse[]> {
    try {
      const params = {
        TableName: DYNAMO_TABLE_NAME
      }

      const { Items } = await this.client.send(new ScanCommand(params))

      const response = Items?.map(item => unmarshall(item))
      return response as CreateInsurancePolicyResponse[]
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
