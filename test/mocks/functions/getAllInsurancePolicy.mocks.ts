import { GET_ALL_INSURANCE_POLICY } from '../../../src/constants/app.constant'

export const getInsurancePolicyResponse = [
  {
    tipo: 'automovil',
    detalles: {
      estado: 'vigente',
      deducible: 500
    },
    fechaFin: '2025-04-10',
    fechaInicio: '2024-04-10',
    id: 'a5c4e0cb-858c-45bb-8501-38b1903bcf3c',
    clienteId: 'CLI-789012'
  },
  {
    tipo: 'automovil',
    detalles: {
      estado: 'vigente',
      deducible: 500
    },
    fechaFin: '2025-04-10',
    fechaInicio: '2024-04-10',
    id: 'f4328936-ee7e-42b6-8da5-b5ea1f3157e8',
    clienteId: 'CLI-789012'
  }
]

export const handleGetInsurancePolicyResponse = {
  message: GET_ALL_INSURANCE_POLICY,
  data: getInsurancePolicyResponse
}
