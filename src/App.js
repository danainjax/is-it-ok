import './App.css'

const getUsers = () => {
  fetch('http://localhost:4000/users')
    .then((response) => response.json())
    .then((data) => console.log(data))
}
getUsers()
function App() {
  return (
    <div className='App'>
      <h1>is-it-ok</h1>
    </div>
  )
}

export default App
