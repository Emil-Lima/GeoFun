import './App.css';
import React, {useState, useEffect} from 'react';
import AppContainer from './containers/AppContainer';


function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchCountries = () => {

    fetch("https://restcountries.com/v3.1/region/europe")
    .then((res) => res.json())
    .then((countries) => setCountries(countries))
}


  return (
    <>
      {countries ? <AppContainer countries = {countries}/> : null}
      
    </>
    
  )
}

export default App;
