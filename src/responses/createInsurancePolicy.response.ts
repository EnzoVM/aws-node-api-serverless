interface Details {
  deducible: number
  estado: string
}

export interface CreateInsurancePolicyResponse {
  id: string
  clienteId: string
  tipo: string
  fechaInicio: string
  fechaFin: string
  detalles: Details
}
