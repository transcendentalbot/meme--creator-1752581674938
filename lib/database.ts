import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, PutCommand, GetCommand, QueryCommand } from '@aws-sdk/lib-dynamodb'

// Initialize DynamoDB client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export const dynamoDb = DynamoDBDocumentClient.from(client)

// Example database functions
export async function saveItem(item: any) {
  const command = new PutCommand({
    TableName: process.env.DATABASE_TABLE_NAME!,
    Item: {
      PK: item.id,
      SK: `ITEM#${item.type}`,
      ...item,
      createdAt: new Date().toISOString(),
    },
  })
  
  return dynamoDb.send(command)
}

export async function getItem(id: string, type: string) {
  const command = new GetCommand({
    TableName: process.env.DATABASE_TABLE_NAME!,
    Key: {
      PK: id,
      SK: `ITEM#${type}`,
    },
  })
  
  const response = await dynamoDb.send(command)
  return response.Item
}