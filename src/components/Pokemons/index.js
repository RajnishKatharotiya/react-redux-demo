import React from 'react';
import './style.css'

const PokemonList = ({ results = [], previous, next, count, loadData }) => {
    return (
    <>
    <h1>PokemonList of {count} records </h1>
    <div className="list">
        {
            results.map(({ name }) => (
                <div className="list-item" key={name}>
                    <p>
                        {name}
                    </p>
                </div>
            ))
        }
    </div>
    <div className="paginations">
        <b onClick={() => previous && loadData(previous)} className={!previous ? 'disabled' : ''} > prev </b>
        <b onClick={() => next && loadData(next)} className={!next ? 'disabled' : ''} > next </b>
    </div>
    </>
)}

export default PokemonList