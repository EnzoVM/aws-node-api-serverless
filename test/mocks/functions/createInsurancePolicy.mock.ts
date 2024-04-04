import { APIGatewayProxyEvent } from 'aws-lambda'

export const eventMockCreateInsurancePolicy: APIGatewayProxyEvent = {
  body: JSON.stringify({
    clienteId: 'CLI-789012',
    tipo: 'automovil',
    fechaInicio: '2024-04-10',
    fechaFin: '2025-04-10',
    detalles: {
      deducible: 500,
      estado: 'vigente'
    }
  })
} as any
