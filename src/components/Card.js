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
border:1px solid black;
border-radius:10px;
padding:5%;
background-color: ${pr => pr.theme.backgroundColor};
h3{
  color: ${pr => pr.theme.white};
  text-shadow: ${pr => pr.theme.textShadow};
}

img{
    max-width:100%;
}
p.description{
    text-align:left;
    font-size:1.1rem;
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
        <p>Date: {date}</p>
        <p class="description">{explanation}</p>
        </StyledCard>
    );
}

export default Card;