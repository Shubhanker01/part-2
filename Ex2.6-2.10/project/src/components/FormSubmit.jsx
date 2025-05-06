import React from 'react'

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
            phone: phone
        }
        if (checkDuplicate(newObj)) {
            alert(`${newObj.name} is already added`)
            return
        }
        setPersons(persons.concat(newObj))
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