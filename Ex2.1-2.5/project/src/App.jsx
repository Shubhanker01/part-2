import Course from './components/Course'

function App() {
  const course = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }]

  return (
    <>
      <h1>Half Stack Application Development</h1>
      {
        course.map((course) => {
          console.log(course)
          return (
            <Course key={course.id} course={course}></Course>
          )
        })
      }
    </>
  )
}

export default App
