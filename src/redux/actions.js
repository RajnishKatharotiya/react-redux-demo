import axios from 'axios';
import { actions } from '../helpers/constants'

export const fetchData = (url) => dispatch => (
    new Promise((resolve, reject) => {
        axios.get(url || 'https://pokeapi.co/api/v2/pokemon/')
            .then(({ data }) => {
                resolve(data)
                dispatch({ type: actions.setPokemons, payload: data })
            })
            .catch(error => {
                reject(error)
            })
    })
)