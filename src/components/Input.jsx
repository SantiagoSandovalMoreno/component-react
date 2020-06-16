import React from 'react';

const Input = ({searchColumn}) => (
    <input className="form-control search_field" placeholder="Busqueda columna" onChange={e => searchColumn(e.target.value.toUpperCase())} />
)
export default Input;