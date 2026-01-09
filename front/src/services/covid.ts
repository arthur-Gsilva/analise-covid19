import { Registro } from "@/types/registro"
import api from "./api"

export const getPlaceInfo = async (query: string): Promise<Registro> => {
    const response = await api.get(`/api/covid/?query=${query}`)
    return response.data
}

export const getAllStates = async (): Promise<Registro[]> => {
    const response = await api.get('/api/covid/brasil/estados/')
    return response.data
}