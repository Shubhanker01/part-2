import React, { useState } from 'react'

function ShowButton({ countryDetails }) {
    const [show, setShow] = useState(false)
    return (
        <>
            <button onClick={() => { setShow(!show) }}>{show === true ? 'hide' : 'show'}</button>
            {
                show === true ? <div>
                    <p>{countryDetails.name}</p>
                    <p>Capital {countryDetails.capital}</p>
                    <p>Area: {countryDetails.area}</p>
                    <div>
                        <h2>Languages</h2>
                        {
                            countryDetails.languages.map((language) => {
                                return <p key={language}>{language}</p>
                            })
                        }
                    </div>
                    <div>
                        <img src={countryDetails.map}></img>
                    </div>
                </div> : <div></div>
            }
        </>
    )
}

export default ShowButton