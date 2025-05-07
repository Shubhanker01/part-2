import React from 'react'
import { addNewPerson, updateExistingPerson } from '../services/services'


function FormSubmit({ persons, setPersons, newName, setNewName, phone, setPhone }) {

    const handleChange = (e) => {
        setNewName(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    // check for duplicate name
    const checkDuplicate = (obj) => {
        for (let i = 0; i < persons.length; i++) {
            if (obj.name === persons[i].name) {
                return true
            }
        }
        return false
    }

    const submitName = (e) => {
        e.preventDefault()
        let newObj = {
            name: newName,
            number: phone
        }
        // if the contact already exists
        if (checkDuplicate(newObj)) {
            if (window.confirm(`${newObj.name} is already added to phonebook, replace the old number with a new one?`)) {
                let user = persons.filter((person) => {
                    if (person.name === newObj.name) {
                        return person
                    }
                })
                console.log(user)
                let id = user[0].id
                updateExistingPerson(id, newObj).then((res) => {
                    console.log(res)
                    setPersons(persons.map((person) => {
                        if (person.id === res.id) {
                            person.number = res.number
                        }
                        return person
                    }))
                }).catch((err) => {
                    console.log(err)
                })
            }
            return;
        }
        addNewPerson(newObj).then((data) => {
            setPersons(persons.concat(data))
        }).catch((err) => {
            console.log(err)
        })

        setNewName("")
        setPhone("")
    }
    return (
        <>
            <form onSubmit={submitName}>
                <div>
                    name: <input type="text" onChange={handleChange} value={newName} />
                </div>
                <div>
                    phone: <input type="text" onChange={handlePhoneChange} value={phone} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default FormSubmit