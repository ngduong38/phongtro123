import axiosConfig from '../axiosConfig'

export const apiGetCategories = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: 'http://localhost:5000/api/v1/category/all',
        })
        resolve(response)
        
    } catch (error) {
        reject(error)
    }
})