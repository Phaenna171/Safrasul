import { EndpointEnum } from "../enums"
import { IActionResponse } from "../interfaces"
import apiService from "./api.service"

class ProductService {
    async register(data: any): Promise<IActionResponse> {
        try {
            await apiService.postFormData(EndpointEnum.PRODUCTS, data, true)
            return { error: false, message: 'Acesse o seu e-mail para recuperar sua senha' }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async getAll(): Promise<IActionResponse> {
        try {
            const result = await apiService.get(EndpointEnum.PRODUCTS)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async getById(id: string): Promise<IActionResponse> {
        try {
            await apiService.get(EndpointEnum.PRODUCTS + id)
            return { error: false, message: 'Acesse o seu e-mail para recuperar sua senha' }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async update(data: any): Promise<IActionResponse> {
        try {
            await apiService.putFormData(EndpointEnum.PRODUCTS + data.id, data, true)
            return { error: false, message: 'Acesse o seu e-mail para recuperar sua senha' }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async delete(id: string): Promise<IActionResponse> {
        try {
            await apiService.delete(EndpointEnum.PRODUCTS + id)
            return { error: false, message: 'Acesse o seu e-mail para recuperar sua senha' }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }
}

const productService = new ProductService()
export default productService