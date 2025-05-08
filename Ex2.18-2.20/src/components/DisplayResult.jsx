import React, { useEffect, useState } from 'react'

function DisplayResult({ names, search }) {
    let [results, setResults] = useState([])
    useEffect(() => {
        if (search === "") {
            setResults([])
            return;
        }
        setResults(names.filter((country) => {
            if (country.name.common.startsWith(search)) {
                return country
            }
        }))
    }, [search])
    console.log(results)
    return (
        <div>
            {
                results.map((country) => {
                    return (
                        <p key={country.name.common}>{country.name.common}</p>
                    )
                })
            }
        </div>
    )
}

export default DisplayResult