import { useState } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]

  const handleSearch = () => {
    const foundWord = dictionary.find(
      item => item.word.toLowerCase() === searchTerm.toLowerCase()
    )
    setSearchResult(foundWord ? foundWord.meaning : "Word not found in the dictionary.")
  }

  return (
    <div className="app-container">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResult && (
        <div className="result-container">
          <h3>Definition:</h3>
          <p>{searchResult}</p>
        </div>
      )}
    </div>
  )
}

export default App
