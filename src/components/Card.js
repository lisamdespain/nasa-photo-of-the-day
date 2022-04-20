import React from 'react';

const Card = props =>{
    const {date, url, title, copyright, explanation} = props;
    
    return(
        <div className="card">
        <img src={url} alt="" />
        <h3>{title}</h3>
        <p>{copyright}</p>
        <p>Date: {date}</p>
        <p>{explanation}</p>
        </div>
    );
}

export default Card;