const App = () => {
  "Refaktoroi sovelluksen koodi siten, että se koostuu kolmesta uudesta "
  "komponentista: Header, Content ja Total. Kaikki data pidetään edelleen"
  "komponentissa App, joka välittää tarpeelliset tiedot kullekin "
  "komponentille props:ien avulla."

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  "Header huolehtii kurssin nimen renderöimisestä"
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  "Content osista ja niiden tehtävämääristä"
  const Content = (props) => {
    return (
      <div>
        <p>{props.parts} {props.exercises}</p>
      </div>
    )
  }

  "Total tehtävien yhteismäärästä."
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.exercises}</p>
      </div>
    )
  }
  

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App