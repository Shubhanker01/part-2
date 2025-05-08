import React from 'react'

function Search({ search, setSearch }) {

    return (
        <>
            <div>
                <p>Find countries</p>
                <input type='text' value={search} onChange={(e) => { setSearch(e.target.value) }}></input>
            </div>
        </>
    )
}

export default Search