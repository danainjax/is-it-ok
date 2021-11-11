import './App.css'

const getUsers = () => {
  fetch('http://localhost:4000/users')
    .then((response) => response.json())
    .then((data) => console.log(data[0].name))
}
getUsers()
function App() {
  return (
    <div className='App'>
      <div
        style={{
          backgroundColor: 'green',
          color: 'white',
          fontFamily: 'Indie Flower',
          textAlign: 'left',
        }}
      >
        <h1>is-it-ok </h1>
      </div>
    </div>
  )
}

export default App
