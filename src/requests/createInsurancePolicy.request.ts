interface Details {
  deducible: number
  estado: string
}

export interface CreateInsurancePolicyRequest {
  clienteId: string
  tipo: string
  fechaInicio: string
  fechaFin: string
  detalles: Details
}
