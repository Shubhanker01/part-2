import { useEffect } from 'react'
import './index.css'
import Search from './components/Search'
import axios from 'axios'
import { useState } from 'react'
import DisplayResult from './components/DisplayResult'

function App() {
  const [search, setSearch] = useState("")
  const [names, setNames] = useState([])
  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`).then((res) => {
      console.log(res.data)
      setNames(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  console.log(names.length)
  return (
    <>
      <div>
        <h1>Search countries by name</h1>
      </div>
      <Search search={search} setSearch={setSearch} />
      <DisplayResult names={names} search={search}/>
    </>
  )
}

export default App
