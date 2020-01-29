import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { fetchData } from './redux/actions';
import Pokemons from './components/Pokemons'

const App = (props) => {
  const [ loading, setLoading ] = useState(false);
  const { fetchData, pokemons } = props;

  const loadData = async (url) => {
    setLoading(true)
    try {
      await fetchData(url)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      {
        loading ? <h1>Loading....</h1>
      :
      <Pokemons {...pokemons} loadData={loadData}/>
      }
    </div>
  );
}

const mapStateToProps = ({state}) => ({
  ...state
})

export default connect(mapStateToProps, { fetchData })(App);
