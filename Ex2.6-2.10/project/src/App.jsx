import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const handleChange = (e) => {
    setNewName(e.target.value)
  }
  const checkDuplicate = () => {
    for(let i=0;i<persons.length;i++){
      
    }
  }
  const submitName = (e) => {
    e.preventDefault()
    let newObj = {
      name: newName
    }
    setPersons(persons.concat(newObj))
    setNewName("")
  }
  console.log(persons)
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={submitName}>
          <div>
            name: <input type="text" onChange={handleChange} value={newName} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {
          persons.map((person) => {
            return <p key={person.name}>{person.name}</p>
          })
        }
      </div>
    </>
  )
}

export default App
