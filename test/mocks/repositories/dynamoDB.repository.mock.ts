import { CreateInsurancePolicyRequest } from '../../../src/requests'

export const dynamoDBIdMock = '123'
export const dataMock: CreateInsurancePolicyRequest = {
  clienteId: '456',
  tipo: 'policy',
  fechaInicio: '2022-01-01',
  fechaFin: '2022-12-31',
  detalles: {
    deducible: 500,
    estado: 'vigente'
  }
}
