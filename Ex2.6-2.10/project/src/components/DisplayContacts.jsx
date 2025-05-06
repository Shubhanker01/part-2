import React from 'react'

function DisplayContacts({persons}) {
    return (
        <>
            {
                persons.map((person) => {
                    return <p key={person.name}>{person.name} {person.phone}</p>
                })
            }
        </>
    )
}

export default DisplayContacts