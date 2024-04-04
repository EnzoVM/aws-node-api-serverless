import { DynamoDBRepository } from '../../../src/repositories/dynamoDB.repository'
import { dataMock, dynamoDBIdMock } from '../../mocks/repositories/dynamoDB.repository.mock'
import { DYNAMO_TABLE_NAME } from '../../../src/constants/env.constant'
import { marshall } from '@aws-sdk/util-dynamodb'
import { DynamoDBClient, PutItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb'
import { mockClient } from 'aws-sdk-client-mock'
import 'aws-sdk-client-mock-jest'

describe('DynamoDBRepository', () => {
  let repository: DynamoDBRepository
  const mockDynamoDbDocumentClient = mockClient(DynamoDBClient)

  beforeEach(() => {
    jest.clearAllMocks()
    mockDynamoDbDocumentClient.reset()
    repository = new DynamoDBRepository()
  })

  describe('create', () => {
    it('should create an item in DynamoDB', async () => {
      mockDynamoDbDocumentClient.on(PutItemCommand).resolves({})

      await repository.create(dynamoDBIdMock, dataMock)

      expect(mockDynamoDbDocumentClient).toHaveReceivedCommandWith(PutItemCommand, {
        TableName: DYNAMO_TABLE_NAME,
        Item: marshall({ id: dynamoDBIdMock, ...dataMock })
      })
    })

    it('should return error when DynamoDB fails', async () => {
      mockDynamoDbDocumentClient.on(PutItemCommand).rejects()
      await expect(repository.create(dynamoDBIdMock, dataMock)).rejects.toBeInstanceOf(Error)
    })
  })

  describe('getAll', () => {
    it('should return all items from DynamoDB', async () => {
      mockDynamoDbDocumentClient.on(ScanCommand).resolves({
        Items: [marshall(dataMock)]
      })

      const result = await repository.getAll()

      expect(result).toEqual([dataMock])
    })

    it('should return error when DynamoDB fails', async () => {
      mockDynamoDbDocumentClient.on(ScanCommand).rejects()
      await expect(repository.getAll()).rejects.toBeInstanceOf(Error)
    })
  })
})
