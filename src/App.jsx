import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [pupId, setPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === pupId);
  console.log(featuredPup)
  console.log(puppies)

  return (
    <>
      <div className="App">
        {pupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
        {
          puppies.map((puppy) => {
            return <p onClick={() => { setPupId(puppy.id) }} key={puppy.id}>
              {puppy.name}
            </p>
          })
        }
      </div>
    </>
  )
}

export default App
