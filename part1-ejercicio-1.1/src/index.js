import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => {
  return (
    <div>
      <h1>Header{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <p>
      {props.name}, {props.exercises}
    </p>
  )
}
const Content = () => {
  return (
    <div>
      <Part name= 'Fundamentals of React' exercices={10}/>
      <Part name= 'Using props to pass data' exercices={7}/>
      <Part name= 'State of a component' exercices={14}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Total Number of exercises :{props.total} </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = (exercises1 + exercises2 + exercises3)

  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total total={total}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
