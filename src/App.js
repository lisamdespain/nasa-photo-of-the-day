import React, { useState, useEffect } from "react";
import "./App.css";
// import { API_KEY } from '../.gitignore';
import Card from './components/Card'
import axios from 'axios';
import styled from "styled-components";

const StyledHeader = styled.div`
color: ${pr => pr.theme.red};
text-shadow: ${pr => pr.theme.textShadow};
`

function App() {
  const [image, setImage] = useState([]);

  useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res =>{
      setImage(res.data);
    }).catch(err => console.log(err))
  }, [])

  return (
    <div class="App">
      <StyledHeader><h1>NASA's Image of the Day</h1></StyledHeader>
      <div>
        <Card date={image.date} url={image.url} title={image.title} copyright={image.copyright}  explanation={image.explanation}/>
      </div>
      
      <footer><p>Copyright 2022</p></footer>
      
    </div>
  );
}

export default App;
