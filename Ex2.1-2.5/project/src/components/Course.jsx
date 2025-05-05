import React from 'react'
import Part from './Part'
function Course({ course }) {
    console.log(course)
    console.log(course.parts)

    const total = course.parts.reduce((acc, currVal) => {
        console.log(acc, currVal)
        return acc + currVal.exercises
    }, 0)
    console.log(total)
    return (
        <>
            {
                course.parts.map((course) => {
                    console.log(course)
                    return (
                        <Part key={course.id} name={course.name} exercises={course.exercises} total={total}></Part>
                    )
                })
            }
            <p>Total of {total} exercises</p>
        </>
    )
}

export default Course