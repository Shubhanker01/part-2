import React, { useEffect, useState } from 'react'
import ShowButton from './ShowButton';
import DisplayWeather from './DisplayWeather';

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

    if (results.length > 10) {
        return (
            <div>Too many matches,specify another filter</div>
        )
    }
    else if (results.length <= 10 && results.length > 1) {
        let li = results.map((country) => {
            let languages = []
            for (let key in country.languages) {
                languages.push(country.languages[key])
            }
            let countryDetails = {
                name: country.name.common,
                capital: country.capital[0],
                area: country.area,
                languages: languages,
                map: country.flags.png
            }

            return (

                <div key={country.name.common}>
                    <p>{country.name.common}</p>
                    <ShowButton countryDetails={countryDetails} />
                </div>

            )
        })
        return (
            <div>{li}</div>
        )
    }
    else if (results.length === 1) {
        let languages = []
        for (let key in results[0].languages) {
            languages.push(results[0].languages[key])
        }
        return (
            <>
                <p>{results[0].name.common}</p>
                <p>Capital {results[0].capital[0]}</p>
                <p>Area: {results[0].area}</p>
                <div>
                    <h2>Languages</h2>
                    {
                        languages.map((language) => {
                            return <p key={language}>{language}</p>
                        })
                    }
                </div>
                <div>
                    <img src={results[0].flags.png}></img>
                </div>
                <DisplayWeather capital={results[0].capital[0]}/>
            </>

        )
    }
}

export default DisplayResult