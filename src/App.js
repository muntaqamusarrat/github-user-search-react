import './App.css';
import React from 'react';
import User from './Components/User'
import Form from './Components/Form'

//API_URL: stores teh base url fo rthe API
const API_URL = "https://api.github.com"

//async function that handle fetching of the data from the API
//query: the search term entered by then user
async function fetchResults(query) {
  //try catch block are used to handle potential errors
  try {
    //an HTTP GET request is made using the fetch function to the URL ,
    //await means wait for the response fron the API before goinf to the next line
    //this allows the function to pause and resume intil the promise returned by 'fetch' is resolved
    const response = await fetch(`${API_URL}/search/users?q=${query}`)
    
    //after response is received, json() is used on the response object to parse the response as JOSN data
    //await is used to wait for the JSON parsing to complete before moving to the next line
    const json = await response.json()

    //after parsing, it returns either the items property from the parsed json data
    //the json obj has an array of items, and json.ietms is used to extract that array
    //if !json.items then it returns an empty array
    return json.items || []
  } catch (e) {
    //in case any error occurs
    throw new Error(e)
  }
}

function App() {
  //states
  //query: current search query
  //setQuery: uodates the query
  const [query, setQuery] = React.useState("")

  //resuts: search results received ftom the API
  //setResults: updates the results array
  const [results, setResults] = React.useState([])

  //this func. is called when the search input field changes
  function onSearchChange(event) {
    //it updates the query state with the new value entered by the user
    setQuery(event.target.value)
  }

  //this func. is called when ssearch form is submitted
  async function onSubmitChange(event) {
    event.preventDefault()
    //fetchResults() is called with current query to fetch the user result
    const results = await fetchResults(query)
    //the results received is used to update the state
    setResults(results)
  }
  
  return (
    <div className="App">
      <main className="main">
        <h2>GitHub User Search</h2>
        {/*Form Component*/}
        <Form 
          //sending these as props to Form Component
          onChange={onSearchChange}
          onSubmit={onSubmitChange}
          value={query}
        />
        <h3>Results</h3>
        <div id="results">
          <div>
            {/*mapping the results*/}
            {results.map((user) => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;