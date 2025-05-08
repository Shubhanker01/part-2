import axios from "axios";

const url = 'http://localhost:3001/persons'

export const getAllPersons = async () => {
    try {
        let response = await axios.get(url)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const addNewPerson = async (person) => {
    try {
        let response = await axios.post(url, person)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateExistingPerson = async (id, updatedUser) => {
    try {
        let response = await axios.put(`${url}/${id}`, updatedUser)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deletePerson = async (id) => {
    try {
        let response = await axios.delete(`${url}/${id}`)
        let data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}