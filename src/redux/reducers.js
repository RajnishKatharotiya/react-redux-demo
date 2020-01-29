import { actions } from '../helpers/constants'

export default ( state = {
    pokemons : {},
    name: "TutorialSpot"
}, { type, payload }) => {
    switch (type){
        case actions.setPokemons:
            state = {
                ...state,
                pokemons: payload
            }
            break;
        default: 
            state = { ...state }
    }
    return state
}