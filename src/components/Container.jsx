import React from 'react';

const Container = ({type, title, children}) => (
    <div className={type}>
        <h4 className="font-weight-bold mb-5">{title}</h4>
        {children}
    </div>
)

export default Container;