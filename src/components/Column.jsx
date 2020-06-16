import React from 'react';

const Column = ({item, handleFuntion}) => (
    <div key={item.id} className={`box ${item.checked ? "box-active": ""}`}>
        <label htmlFor={`item-${item.id}`} className="b-contain">
            <span>{item.test}</span>
            <input id={`item-${item.id}`} type="checkbox" onClick={() => handleFuntion(item.id)} />
            <div className="b-input"></div>
        </label>
    </div>
)

export default Column;