import { SPANISH_WORDS } from '../constants/app.constant'
import { StarWarsPlanetsApiResponse, StarWarsPeopleApiResponse } from '../responses'

export const translateToSpanishMapper = (
  data: StarWarsPlanetsApiResponse | StarWarsPeopleApiResponse
): Record<string, string | string[]> => {
  const dataInSpanish: Record<string, string | string[]> = {}

  for (const key in data) {
    if (key in SPANISH_WORDS) {
      dataInSpanish[SPANISH_WORDS[key as keyof typeof SPANISH_WORDS]] = data[key as keyof typeof data]
    } else {
      dataInSpanish[key] = data[key as keyof typeof data]
    }
  }

  return dataInSpanish
}
