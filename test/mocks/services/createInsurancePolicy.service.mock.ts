import { CreateInsurancePolicyRequest } from '../../../src/requests'

export const dynamoDBRepositoryMock = {
  create: jest.fn(),
  getAll: jest.fn()
}

export const dataParameterMock: CreateInsurancePolicyRequest = {
  clienteId: 'CLI-789012',
  tipo: 'automovil',
  fechaInicio: '2024-04-10',
  fechaFin: '2025-04-10',
  detalles: {
    deducible: 500,
    estado: 'vigente'
  }
}
