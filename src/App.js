import './App.css'

const getUsers = () => {
  fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((data) => console.log(data[0].name))
}
getUsers()
function App() {
  return (
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
  )
}

export default App
