import React from 'react';
import styled, {keyframes} from "styled-components";

const keyf = keyframes`
from {
    transform: translateX(100%);
   
  }

  to {
    transform: translateX(0%);
   
  }
`

const StyledCard = styled.div`
width:60%;
margin:auto;
border:1px solid #00100B;
border-radius:10px;
padding:5%;
background-color: ${pr => pr.theme.backgroundColor};
filter: drop-shadow(5px 5px 3px lightgray);
h3{
  color: ${pr => pr.theme.red};
  
}

img{
    max-width:100%;
    border: 2px solid white;
}
p.description{
    text-align:left;
    font-size:1.1rem;
}
p.date{
    font-weight:bold;
}
animation: ${keyf} 1s;
`

const Card = props =>{
    const {date, url, title, copyright, explanation} = props;
    
    return(
        <StyledCard>
        <img src={url} alt="" />
        <h3>{title}</h3>
        <p>{copyright}</p>
        <p class="date">Date: {date}</p>
        <p class="description">{explanation}</p>
        </StyledCard>
    );
}

export default Card;