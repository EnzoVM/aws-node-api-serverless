export const dynamoDBRepositoryMock = {
  create: jest.fn(),
  getAll: jest.fn()
}

export const responseMock = [
  {
    tipo: 'automovil',
    detalles: {
      estado: 'vigente',
      deducible: 500
    },
    fechaFin: '2025-04-10',
    fechaInicio: '2024-04-10',
    id: 'e1b996d5-0cc7-426d-b3d2-609777db763d',
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
    id: '643f51da-01af-4ee0-a9e5-29c6fd25f6c5',
    clienteId: 'CLI-789012'
  }
]
